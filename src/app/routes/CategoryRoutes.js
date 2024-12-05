const express = require("express");

const router = express.Router();

const {
  readAllCategories,
  readOneCategory,
  createCategory,
  editCategory,
  deleteCategory,
} = require("../Controllers/CategorieController");

router.get("/", readAllCategories);
router.get("/:id", readOneCategory);
router.post("/", createCategory);
router.put("/:id", editCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
