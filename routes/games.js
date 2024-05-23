const gamesRouter = require("express").Router();
const { checkAuth } = require("../middlewares/auth");
const {sendAllGames} = require("../controllers/games");
const {findAllGames, checkIsVoteRequest} = require("../middlewares/games");
const {createGame} = require('../middlewares/games');
const {sendGameCreated} = require('../controllers/games');
const {findGameById, updateGame, deleteGame} = require('../middlewares/games');
const {sendGameById, sendGameUpdated, sendGameDeleted} = require('../controllers/games')
const {checkEmptyFields, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkIsCategoryExists, checkIsUserExists, checkIsGameExists, checkEmptyName, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail} = require('../middlewares/check')
gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.get("/games/:id", findGameById, sendGameById);
gamesRouter.post(
    "/games",
    findAllGames,
    checkIsGameExists,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    createGame,
    sendGameCreated
  );
  
  gamesRouter.put(
    "/games/:id",
    findGameById,
    checkIsVoteRequest,
    checkIfUsersAreSafe,
    checkIfCategoriesAvaliable,
    checkEmptyFields,
    checkAuth,
    updateGame,
    sendGameUpdated
  );
  gamesRouter.delete(
    "/games/:id",
    checkAuth, // Слушаем запросы по эндпоинту
    deleteGame,
    sendGameDeleted
     // Тут будут функция удаления элементов из MongoDB и ответ клиенту
  ); 
module.exports = gamesRouter;