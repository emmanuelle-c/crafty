const express = require("express");
const ProduitController = require("../Controllers/ProduitController");

const router = express.Router();
const produitController = new ProduitController();

router.get("/", produitController.readAll.bind(produitController));
router.get("/:id", produitController.readOne.bind(produitController));
router.post("/", produitController.create.bind(produitController));
router.put("/:id", produitController.update.bind(produitController));
router.delete("/:id", produitController.delete.bind(produitController));

module.exports = router;