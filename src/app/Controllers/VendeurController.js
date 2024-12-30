const AbstractController = require("./AbstractController");
const VendeurModel = require("../Models/VendeurModel");
const UtilisateurModel = require("../Models/UtilisateurModel");

const vendeurModel = new VendeurModel();
const utilisateurModel = new UtilisateurModel();

class VendeurController extends AbstractController {
  constructor() {
    super(vendeurModel);
  }

  async create(req, res, next) {
    try {
      const data = req.body;
      const id = req.params.id;

      const existingUser = await utilisateurModel.readOne(id);
      if (!existingUser) {
        return res.status(404).json({ error: "Utilisateur non trouvé" });
      }

      await utilisateurModel.updateRoleToVendeur(id);
      const newVendeur = await this.model.create(id, data);
      res.status(201).json(newVendeur);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ error: "ID parameter is required" });
      }
      const existingUser = await utilisateurModel.readOne(id);
      if (!existingUser) {
        return res.status(404).json({ error: "Utilisateur not found" });
      }
      await utilisateurModel.updateRoleToClient(id);
      await this.model.deleteOne(id);
      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = VendeurController;
