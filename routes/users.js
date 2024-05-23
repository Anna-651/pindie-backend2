const usersRouter = require("express").Router();
const { checkAuth } = require("../middlewares/auth.js");
const {findAllUsers, hashPassword} = require('../middlewares/users');
const {sendAllUsers} = require('../controllers/users');
const {createUser} = require("../middlewares/users");
const {sendUserCreated, sendMe} = require('../controllers/users');
const {sendUserById, sendUserUpdated, sendUserDeleted} = require('../controllers/users');
const {findUserById, updateUser, deleteUser} = require('../middlewares/users')
const {checkEmptyFields, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkIsCategoryExists, checkIsUserExists, checkIsGameExists, checkEmptyName, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail} = require('../middlewares/check')
usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.get("/me", checkAuth, sendMe);
usersRouter.post(
    "/users",
    findAllUsers,
    checkIsUserExists,
    checkEmptyNameAndEmailAndPassword,
    checkAuth,
    hashPassword,
    createUser,
    sendUserCreated
  );
  
  usersRouter.put(
    "/users/:id",
    checkEmptyNameAndEmail,
    checkAuth,
    updateUser,
    sendUserUpdated
  );
  usersRouter.get("/users/:id", findUserById, sendUserById);
  usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);
module.exports = usersRouter;