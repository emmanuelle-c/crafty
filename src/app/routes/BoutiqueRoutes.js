const express = require("express");
const BoutiqueController = require("../Controllers/BoutiqueController");
const imageUpload = require("../services/imageUpload");

const router = express.Router();
const boutiqueController = new BoutiqueController();

router.get("/", boutiqueController.readAll.bind(boutiqueController));
router.get("/:id", boutiqueController.readOne.bind(boutiqueController));
router.post(
  "/",
  imageUpload.single("photo"),
  boutiqueController.create.bind(boutiqueController)
);
router.put(
  "/:id",
  imageUpload.single("photo"),
  boutiqueController.update.bind(boutiqueController)
);
router.delete("/:id", boutiqueController.delete.bind(boutiqueController));

module.exports = router;
