const knex = require("knex");
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

const getDishes = () => {
  return db("dishes");
};

const addDish = dish => {
  return db("dishes").insert(dish);
};

const getDish = id => {
  return db("recipes as r")
    .join("dishes as d", "r.dish_id", "d.id")
    .select("d.name as Type", "r.name as Recipe", "r.instructions as Instructions")
    .where({ "d.id": id });
};

const updateDish = (id, dish) => {
  return db("recipes")
    .where({ id })
    .update(dish);
};

module.exports = {
  getDishes,
  getDish,
  addDish
};
