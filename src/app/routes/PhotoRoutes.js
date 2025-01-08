const express = require("express");
const PhotoController = require("../Controllers/PhotoController");

const router = express.Router();
const photoController = new PhotoController();

router.get("/", photoController.getAllPhotos.bind(photoController));

module.exports = router;
