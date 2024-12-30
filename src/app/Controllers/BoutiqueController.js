const AbstractController = require("./AbstractController");
const BoutiqueModel = require("../Models/BoutiqueModel");

const boutiqueModel = new BoutiqueModel();

class BoutiqueController extends AbstractController{
    constructor(){
        super(boutiqueModel);
    }

    async create(req, res, next) {
        const uploadDest = `${process.env.APP_HOST}/uploads/profils`;
        if (req.file) req.body.photo = uploadDest + req.file.filename;
        try {
          const data = req.body;
          const newItem = await this.model.create(data);
          res.status(201).json(newItem);
        } catch (error) {
          next(error);
        }
      }
};

module.exports = BoutiqueController;