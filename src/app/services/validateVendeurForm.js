const VendeurModel = require("../Models/VendeurModel");

const validateVendeurForm = async (req, res, next) => {
  const { nif, nom, prenom } = req.body;

  const errors = [];

  const [result] = await VendeurModel.findByNif(nif);
  if (result) {
    errors.push({
      label: "nifChecked",
      error: "NIF déjà existant",
    });
  }

  if (!/^[0-3]\d{12}$/.test(nif)) {
    errors.push({
      label: "nifFormat",
      error: "Le NIF doit être de 13 chiffres, commençant par 0, 1, 2 ou 3",
    });
  }

  if (!nom) {
    errors.push({
      label: "nomChecked",
      error: "Le nom est obligatoire",
    });
  }

  if (!prenom) {
    errors.push({
      label: "prenomChecked",
      error: "Le prénom est obligatoire",
    });
  }

  if (errors.length !== 0) res.status(400).json(errors);
  else next();
};

module.exports = { validateVendeurForm };
