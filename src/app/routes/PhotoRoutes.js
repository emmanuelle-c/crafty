const express = require("express");
const PhotoController = require("../Controllers/PhotoController");
const uploadImage = require("../services/imageUpload");

const router = express.Router();
const photoController = new PhotoController();

router.get("/", photoController.readAll.bind(photoController));
router.get("/:id", photoController.readOne.bind(photoController));
router.post(
  "/",
  uploadImage.single("url"),
  photoController.create.bind(photoController)
);
router.put(
  "/:id",
  uploadImage.single("url"),
  photoController.update.bind(photoController)
);
router.delete("/:id", photoController.delete.bind(photoController));

module.exports = router;
