const express = require("express");
const cookieParser = require("cookie-parser");
const {cors} = require("./middlewares/cors");
const pagesRouter = require("./routes/pages");
const path = require("path");
const bodyParser = require("body-parser");
const gamesRouter = require('./routes/games');
const categoriesRouter = require('./routes/categories');
const usersRouter = require('./routes/users');
const apiRouter = require('./routes/apiRouter');
const connectToDataBase = require("./database/connect");
connectToDataBase();
const PORT = 3001;
const app = express();
app.use (
  cors,
  cookieParser(),
  bodyParser.json(),
  pagesRouter, // Добавляем роутер для страниц
  apiRouter,
  express.static(path.join(__dirname, "public"))
    
)
app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`)
})