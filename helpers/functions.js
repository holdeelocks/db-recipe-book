const knex = require("knex");
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

const getDishes = () => {
  db("dishes").then(dishes => {
    return dishes;
  });
  // .catch(err => console.log(err));
};

const addDish = dish => {
  db("dishes").insert(dish);
  // .then(response => {
  //   console.log(response);
  // });
  // .catch(err => console.log(err));
};

const getDish = id => {
  db("recipes as r")
    .join("dishes as d", "r.dish_id", "d.id")
    .select("d.name as Dish", "r.name as Recipe", "r.instructions as Instructions")
    .where({ "d.id": id });
  // .then(dish => console.log(dish));
};

const getRecipes = () => {
  db("recipes as r")
    .select("r.id as ID", "r.name as Recipe", "r.instructions as HowTo", "r.dish_id as DishID")
    .then(recipes => recipes);
  // .catch(err => console.log(err));
};

const addRecipe = recipe => {
  db("recipes").insert(recipe);
  // .then(response => console.log(response));
  // .catch(err => console.log(err));
};

module.exports = {
  getDishes,
  getRecipes,
  getDish,
  addDish,
  addRecipe
};
