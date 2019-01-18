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

const updateRecipeIngredient = update => {
  return db("recipe_ingredients")
    .where({
      recipe_id: update.recipe_id,
      ingredient_id: update.ingredient_id
    })
    .update(update);
};

module.exports = {
  addRecipeIngredient,
  removeRecipeIngredient,
  updateRecipeIngredient
};
