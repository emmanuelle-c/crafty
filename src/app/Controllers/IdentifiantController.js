const IdentifiantModel = require("../Models/IdentifiantModel");
const AbstractController = require("./AbstractController")

const identifiantModel = new IdentifiantModel();

class IdentifiantController extends AbstractController{
    constructor() {
        super(identifiantModel);
      }

      async create(req, res, next) {
        try {
          const data = req.body;
          const newItem = await this.model.create(data);
          res.status(201).json(newItem);
        } catch (error) {
          next(error);
        }
      }
}

module.exports = IdentifiantController;