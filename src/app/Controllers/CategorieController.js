const CategorieModel = require("../Models/CategorieModel");
const AbstractController = require("./AbstractController")

const categoryModel = new CategorieModel();

class CategorieController extends AbstractController{
    constructor() {
        super(categoryModel);
    }
}

module.exports = CategorieController;