const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
const IdentifiantModel = require("../Models/IdentifiantModel");
const UtilisateurModel = require("../Models/UtilisateurModel");

const identifiantModel = new IdentifiantModel();
const utilisateurModel = new UtilisateurModel();

class AuthService {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;

      // Rechercher l'utilisateur par email
      const user = await identifiantModel.findByEmail(email);

      // Vérifier le mot de passe
      const validPassword = await argon2.verify(user.mot_de_passe, password);
      if (!validPassword) {
        return res.status(400).json({ error: "Identifiants incorrects" });
      }

      // Générer les tokens
      const accessToken = jwt.sign({ id: user.id_identifiant }, process.env.APP_SECRET, {
        expiresIn: "1h",
      });

      const refreshToken = jwt.sign({ id: user.id_identifiant }, process.env.APP_SECRET, {
        expiresIn: "1d",
      });

      // Supprimer le mot de passe des données retournées
      delete user.mot_de_passe;
      const client = await utilisateurModel.findByIdentifiant(
        user.id_identifiant
      );
      // Retourner la réponse avec les cookies et les données utilisateur
      res
        .status(200)
        .cookie("refreshToken", refreshToken, {
          httpOnly: true,
          sameSite: "lax",
          secure: process.env.APP_ENV === "production",
          maxAge: 24 * 60 * 60 * 1000, // Expiration du cookie (1 jour)
        })
        .header("Authorization", accessToken)
        .json({ user, client });
    } catch (error) {
      next(error);
    }
  }

  // Fonction pour vérifier et rafraîchir le token d'accès
  static async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      if (!refreshToken) {
        res.status(401).json("Access Denied. No refresh token provided");
      }
      const decoded = jwt.verify(refreshToken, process.env.APP_SECRET);

      const user = await identifiantModel.readOne(decoded.id_identifiant);
      if (!user) {
        return res.status(404).json({ error: "Utilisateur non trouvé" });
      }
      const accessToken = jwt.sign(
        { id: user.id_identifiant },
        process.env.APP_SECRET,
        { expiresIn: "1h" }
      );

      const client = await utilisateurModel.findByIdentifiant(
        user.id_identifiant
      );

      delete user.mot_de_passe;

      res
        .status(200)
        .header("Authorization", `Bearer ${accessToken}`)
        .json({ user, client });
    } catch (error) {
      next(error);
    }
  }

  static async logout(req, res, next) {
    try {
      res
        .clearCookie("refreshToken")
        .status(200)
        .json({ message: "Déconnexion réussie" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthService;
