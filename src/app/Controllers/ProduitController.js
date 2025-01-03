const AbstractController = require("./AbstractController");
const ProduitModel = require("../Models/ProduitModel");

const produitModel = new ProduitModel();

class ProduitController extends AbstractController{
    constructor(){
        super(produitModel);
    }

    async create(req, res, next) {
        try {
          const data = req.body;
          const newItem = await this.model.create(data);
          if (newItem) {
            const id_categorie = req.body.categorie;
            await this.model.addCategoryToProduct(req.params.id, id_categorie);
          }
          res.status(201).json(newItem);
        } catch (error) {
          next(error);
        }
      }
};

module.exports = ProduitController;