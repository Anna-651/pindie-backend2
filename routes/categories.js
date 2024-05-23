const categoriesRouter = require("express").Router();
const { checkAuth } = require("../middlewares/auth.js");
const {findAllCategories} = require('../middlewares/categories');
const {sendAllCategories} = require('../controllers/categories');
const {createCategory} = require('../middlewares/categories');
const {sendCategoryCreated, sendCategoryUpdated, sendCategoryDeleted} = require('../controllers/categories');
const {sendCategoryById} = require('../controllers/categories');
const {findCategoryById, updateCategory, deleteCategory} = require("../middlewares/categories")
const {checkEmptyFields, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkIsCategoryExists, checkIsUserExists, checkIsGameExists, checkEmptyName, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail} =require('../middlewares/check')
categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.post(
    "/categories",
    findAllCategories,
    checkIsCategoryExists,
    checkEmptyName,
    checkAuth,
    createCategory,
    sendCategoryCreated
  );
  
  categoriesRouter.put(
    "/categories/:id",
    checkEmptyName,
    checkAuth,
    updateCategory,
    sendCategoryUpdated
  );
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.delete("/categories/:id", checkAuth, deleteCategory, sendCategoryDeleted);
module.exports = categoriesRouter;