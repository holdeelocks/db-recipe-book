const knex = require("knex");
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

const getRecipes = () => {
  return db("recipes as r").select(
    "r.id as ID",
    "r.name as Recipe",
    "r.instructions as HowTo",
    "r.dish_id as DishID"
  );
};

const addRecipe = recipe => {
  return db("recipes").insert(recipe);
};

module.exports = {
  getRecipes,
  addRecipe
};
