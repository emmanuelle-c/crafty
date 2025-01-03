const IdentifiantModel = require("../Models/IdentifiantModel");
const AbstractController = require("./AbstractController");
const PasswordService = require("../services/PasswordService");
const identifiantModel = new IdentifiantModel();

class IdentifiantController extends AbstractController{
    constructor() {
        super(identifiantModel);
      }

      async create(req, res, next) {
        try {
          req.body.mot_de_passe = await PasswordService.hash(req.body.mot_de_passe);
          const data = req.body;
          const newItem = await this.model.create(data);
          res.status(201).json(newItem);
        } catch (error) {
          next(error);
        }
      }

      async update(req, res, next) {
        try {
          const { id } = req.params;
          req.body.mot_de_passe = await PasswordService.hash(req.body.mot_de_passe);
          const data = req.body;
          if (!id) {
            return res.status(400).json({ error: "ID parameter is required" });
          }
          const existingItem = await this.model.readOne(id);
          if (!existingItem) {
            return res.status(404).json({ error: "Item not found" });
          }
          const updatedItem = await this.model.edit(data, id);
          res.status(200).json(updatedItem);
        } catch (error) {
          next(error);
        }
      }
}

module.exports = IdentifiantController;