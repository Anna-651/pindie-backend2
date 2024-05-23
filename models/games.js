const mongoose = require('mongoose');
const categoryModel = require('./categories');
const userModel = require('./users');
const gameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      developer: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      link: {
        type: String,
        required: true
      },
      users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: userModel,
      }],
      // Добавляем свойство категории с массивом объектов, в котором укажем 
      // тип ObjectId и ref на существующую модель категорий
      categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: categoryModel,
      }],
});

gameSchema.statics.findGameByCategory = function(category) {
  return this.find({}) // Выполним поиск всех игр
    .populate({
      path: "categories",
      match: { name: category } 
    })
    .populate({
      path: "users",
      select: "-password"
    })
    .then(games => {
        // Отфильтруем по наличию искомой категории 
      return games.filter(game => game.categories.length > 0);
    });
};
const games = mongoose.model('game', gameSchema);
module.exports = games;