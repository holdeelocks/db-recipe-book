const knex = require("knex");
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

const addRecipeIngredient = ingredients => {
  return db("recipe_ingredients").insert(ingredients);
};

const removeRecipeIngredient = (recipeId, ingredientId) => {
  return db("recipe_ingredients")
    .where({ recipe_id: recipeId, ingredient_id: ingredientId })
    .del();
};

module.exports = {
  addRecipeIngredient,
  removeRecipeIngredient
};
