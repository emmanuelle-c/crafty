const validateProductForm = (req, res, next) => {
  const { nom, description, prix, categorie } = req.body;

  const errors = [];

  if (!nom) {
    errors.push({
      label: "productNameRequired",
      error: "Un nom de produit doit être renseigné",
    });
  }

  if (!description) {
    errors.push({
      label: "descriptionRequired",
      error: "Une description est obligatoire",
    });
  }

  if (!categorie) {
    errors.push({ label: "categorieRequired", error: "Catégorie obligatoire" });
  }

  if (!prix) {
    errors.push({
      label: "prixRequired",
      error: "Un prix est nécessaire",
    });
  }
  if (errors.length !== 0) res.status(400).json(errors);
  else next();
};

module.exports = validateProductForm;
