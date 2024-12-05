const CategorieModel = require("../Models/CategorieModel");

const categoryModel = new CategorieModel();

//read all
const readAllCategories = async ({ res, next }) => {
    try {
      const categories = await categoryModel.readAll();
      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  };

//read one
const readOneCategory = async ({req, res, next}) => {
    const { id } = req.params;
    try {
        const category = await categoryModel.readOne(id);
        if (category){
            res.status(200).json(category);
        }
        else {
            res.status(404);
        }
    } catch (error) {
        next(error);
    }
}
//create
const createCategory = async ({req, res, next}) => {
    const category = req.body;
    try {
        const newCategory = await categoryModel.addCategory(category);
        res.status(201).json(newCategory);
    } catch (error) {
        next(error);
    }
}

//edit
const editCategory = async ({req, res, next}) => {
    const body = req.body;
    const { id } = req.params;
    try {
        const category = await categoryModel.readOne(id);
        if (category) {
            const editedCategory = await categoryModel.edit(body, id);
            res.status(200).json(editedCategory);
        }
        else {
            res.status(404);
        }
    } catch (error) {
        next(error);
    }
}

//delete
const deleteCategory = async ({req, res, next}) => {
    const { id } = req.params;
    try {
        const category = await categoryModel.readOne(id);
        if (category) {
            const deletedCategory = await categoryModel.deleteOne(id);
            res.status(204).json(deleteCategory);
        }
        else {
            res.status(404);
        }
    } catch (error) {
        next(error);
    }
}


module.exports = {
    readAllCategories,
    readOneCategory,
    createCategory,
    editCategory,
    deleteCategory
}