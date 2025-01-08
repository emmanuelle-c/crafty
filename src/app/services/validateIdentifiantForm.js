const IdentifiantModel = require("../Models/IdentifiantModel");

const ValidateUserForm = async (req, res, next) => {
  const { email, mot_de_passe } = req.body;

  const errors = [];

  if (!email) {
    errors.push({ label: "emailRequire", error: "Email obligatoire" });
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.push({
      label: "emailFormat",
      error: "Saisissez une adresse mail valide",
    });
  }

  const [result] = await IdentifiantModel.findByEmail(req.body.email);
  if (result) {
    errors.push({
      label: "emailChecked",
      error: "Email déjà existant",
    });
  }

  if (!mot_de_passe) {
    errors.push({
      label: "passwordRequire",
      error: "Mot de passe obligatoire",
    });
  }

  if (mot_de_passe.length < 8) {
    errors.push({
      label: "passwordFormat",
      error: "Le mot de passe doit contenir au moins 8 caractères",
    });
  }

  if (!/^(?=.*[A-Z])(?=.*\d).+$/.test(mot_de_passe)) {
    errors.push({
      label: "passwordFormat",
      error:
        "Le mot de passe doit contenir au moins une majuscule et un chiffre",
    });
  }

  if (errors.length !== 0) res.status(400).json(errors);
  else next();
};

module.exports = ValidateUserForm;
