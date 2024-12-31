const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
const IdentifiantModel = require("../Models/IdentifiantModel");

const identifiantModel = new IdentifiantModel();

class AuthService {
  static async login(req, res, next) {
    try {
      const { email, mot_de_passe } = req.body;

      // Rechercher l'utilisateur par email
      const user = await identifiantModel.findByEmail(email);
      if (!user) {
        return res.status(404).json({ error: "Utilisateur non trouvé" });
      }

      // Vérifier le mot de passe
      const validPassword = await argon2.verify(user.mot_de_passe, mot_de_passe);
      if (!validPassword) {
        return res.status(400).json({ error: "Identifiants incorrects" });
      }

      // Générer les tokens
      const accessToken = jwt.sign(
        { id: user.id_utilisateur, role: user.role },
        process.env.APP_SECRET,
        { expiresIn: "1h" }
      );

      const refreshToken = jwt.sign(
        { id: user.id_utilisateur, role: user.role },
        process.env.APP_SECRET,
        { expiresIn: "1d" }
      );

      // Supprimer le mot de passe des données retournées
      delete user.mot_de_passe;

      // Retourner la réponse avec les cookies et les données utilisateur
      res
        .status(200)
        .cookie("refreshToken", refreshToken, {
          httpOnly: true, // Empêche l'accès aux cookies via JavaScript (sécurité XSS)
          sameSite: "lax", // Protège contre certains types d'attaques CSRF
          secure: process.env.APP_ENV === "production", // Assure l'envoi via HTTPS uniquement en production
          maxAge: 24 * 60 * 60 * 1000, // Expiration du cookie (1 jour)
        })
        .header("Authorization", accessToken) // Inclut l'accessToken dans les headers
        .json({ user });
    } catch (error) {
      next(error);
    }
  }

  // Fonction pour vérifier et rafraîchir le token d'accès
  static async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      if (!refreshToken) {
        return res.status(401).json({ error: "Token de rafraîchissement manquant" });
      }

      jwt.verify(refreshToken, process.env.APP_SECRET, (err, user) => {
        if (err) {
          return res.status(403).json({ error: "Token de rafraîchissement invalide" });
        }

        const newAccessToken = jwt.sign(
          { id: user.id, role: user.role },
          process.env.APP_SECRET,
          { expiresIn: "1h" }
        );

        res.header("Authorization", newAccessToken).sendStatus(200);
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = AuthService;
