const checkEmptyFields = async (req, res, next) => {
  if(req.isVoteRequest) {
    next();
    return;
  } 
  else {
      next();
    }
  };
  const checkEmptyName = async (req, res, next) => {
    if(req.isVoteRequest) {
      next();
      return;
    } else {
      next();
    }
  };
  const checkEmptyNameAndEmailAndPassword = async (req, res, next) => {
    if (!req.body.username || !req.body.email || !req.body.password) {
      res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Введите имя, email и пароль" }));
    } else {
      next();
    }
  };
  const checkEmptyNameAndEmail = async (req, res, next) => {
    if (!req.body.username || !req.body.email) {
      res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Введите имя и email" }));
    } else {
      next();
    }
  };
  const checkIsGameExists = async (req, res, next) => {
    const isInArray = req.gamesArray.find((game) => {
      return req.body.title === game.title;
    });
    if (isInArray) {
      res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Игра с таким названием уже существует" }));
    } else {
      next();
    }
  };
  const checkIsUserExists = async (req, res, next) => {
    const isInArray = req.usersArray.find((user) => {
      return req.body.email === user.email;
    });
    if (isInArray) {
      res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Пользователь с таким email уже существует" }));
    } else {
      next();
    }
  };
  const checkIsCategoryExists = async (req, res, next) => {
    const isInArray = req.categoriesArray.find((category) => {
      return req.body.name === category.name;
    });
    if (isInArray) {
      res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Категория с таким названием уже существует" }));
    } else {
      next();
    }
  };
  const checkIfCategoriesAvaliable = async (req, res, next) => {
    if (!req.body.categories || req.body.categories.length === 0) {
      res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Выберите хотя бы одну категорию" }));
    } else {
      next();
    }
  };
  const checkIfUsersAreSafe = async (req, res, next) => {
    if (!req.body.users) {
      next();
      return;
    }
    if (req.body.users.length - 1 === req.game.users.length) {
      next();
      return;
    } else {
      res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Нельзя удалять пользователей или добавлять больше одного пользователя" }));
    }
  };
module.exports = {checkEmptyFields, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkIsCategoryExists, checkIsUserExists, checkIsGameExists, checkEmptyName, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail};