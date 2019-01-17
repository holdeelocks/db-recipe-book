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

const getRecipe = id => {
  return db("dishes as d")
    .join("recipes as r", "r.dish_id", "d.id")
    .join("recipe_ingredients as ri", "r.id", "ri.recipe_id")
    .join("ingredients as i", "i.id", "ri.ingredient_id")
    .join("units as u", "u.id", "ri.unit_id")
    .select(
      "d.name as Dish",
      "r.name as Recipe",
      "i.name as Ingredient",
      "ri.quantity as Amount",
      "u.name as unit(s)"
    )
    .where({ "r.id": id });
};

const addRecipe = recipe => {
  return db("recipes").insert(recipe);
};

module.exports = {
  getRecipes,
  getRecipe,
  addRecipe
};
