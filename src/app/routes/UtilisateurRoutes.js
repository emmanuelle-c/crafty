const express = require("express");
const UtilisateurController = require("../Controllers/UtilisateurController");

const router = express.Router();
const utilisateurController = new UtilisateurController();

router.get("/", utilisateurController.readAll.bind(utilisateurController));
router.get("/:id", utilisateurController.readOne.bind(utilisateurController));
router.post("/", utilisateurController.create.bind(utilisateurController));
router.put("/:id", utilisateurController.update.bind(utilisateurController));
router.delete("/:id", utilisateurController.delete.bind(utilisateurController));

module.exports = router;
