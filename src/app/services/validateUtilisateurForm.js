const UtilisateurModel = require("../Models/UtilisateurModel");

const validateUtilisateurForm = async (req, res, next) => {
  const { pseudo, telephone, adresse } = req.body;

  const errors = [];

  if (!pseudo) {
    errors.push({
      label: "pseudoRequired",
      error: "Le pseudo est obligatoire",
    });
  }

  const [result] = await UtilisateurModel.findByPseudo(req.body.pseudo);
  if (result) {
    errors.push({
      label: "pseudoChecked",
      error: "Pseudo déjà existant",
    });
  }

  if (telephone && !/^\d{10}$/.test(telephone)) {
    errors.push({
      label: "phoneNumberFormat",
      error: "Le numéro de téléphone doit contenir exactement 10 chiffres",
    });
  }

  if (adresse && !/^(?=.*[A-Za-z])(?=.*\d).{5,}$/.test(adresse)) {
    errors.push({
      label: "addressFormat",
      error:
        "L'adresse doit contenir au moins une lettre, un chiffre et avoir une longueur minimale de 5 caractères",
    });
  }

  if (errors.length !== 0) res.status(400).json(errors);
  else next();
};

module.exports = { validateUtilisateurForm };
