const express = require("express");
const CategorieController = require("../Controllers/CategorieController");

const router = express.Router();

const categorieController = new CategorieController();

router.get("/", categorieController.readAll.bind(categorieController));
router.get("/:id", categorieController.readOne.bind(categorieController));
router.post("/", categorieController.create.bind(categorieController));
router.put("/:id", categorieController.update.bind(categorieController));
router.delete("/:id", categorieController.delete.bind(categorieController));

module.exports = router;
