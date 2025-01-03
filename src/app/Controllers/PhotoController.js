const AbstractController = require("./AbstractController");
const PhotoModel = require("../Models/PhotoModel");

const photoModel = new PhotoModel();

class PhotoController extends AbstractController {
  constructor() {
    super(photoModel);
  }

  async create(req, res, next) {
    const uploadDest = `${process.env.APP_HOST}/uploads/produits`;
    if (req.file) req.body.url = uploadDest + req.file.filename;
    try {
      const data = req.body;
      const newItem = await this.model.create(data);
      res.status(201).json(newItem);
    } catch (error) {
      next(error);
    }
  }

}

module.exports = PhotoController;
