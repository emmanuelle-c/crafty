const UtilisateurModel = require('../Models/UtilisateurModel');
const AbstractController = require("./AbstractController");

const utilisateurModel = new UtilisateurModel();

class UtilisateurController extends AbstractController{
    constructor() {
        super(utilisateurModel);
    }
}

module.exports = UtilisateurController;