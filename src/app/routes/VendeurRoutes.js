const express = require("express");
const VendeurController = require("../Controllers/VendeurController");

const router = express.Router();

const vendeurController = new VendeurController();

router.get("/", vendeurController.readAll.bind(vendeurController));
router.get("/:id", vendeurController.readOne.bind(vendeurController));
router.post("/:id", vendeurController.create.bind(vendeurController));
router.put("/:id", vendeurController.update.bind(vendeurController));
router.delete("/:id", vendeurController.delete.bind(vendeurController));

module.exports = router;
