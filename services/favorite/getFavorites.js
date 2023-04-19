// const mongoose = require('mongoose');
// const { ObjectId } = mongoose.Types;
const { Recipes } = require('../../db/recipesModel');

const getFavorites = async (favorites) => {
  const result = await Recipes.find({
    _id: favorites,
  });

  return result;
};

module.exports = { getFavorites };
