exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 0.5, unit_id: 6 },
        { recipe_id: 1, ingredient_id: 7, quantity: 3, unit_id: 4 },
        { recipe_id: 1, ingredient_id: 10, quantity: 12, unit_id: 4 },
        { recipe_id: 1, ingredient_id: 11, quantity: 1 / 3, unit_id: 3 },
        { recipe_id: 4, ingredient_id: 2, quantity: 4, unit_id: 7 },
        { recipe_id: 4, ingredient_id: 3, quantity: 6, unit_id: 8 },
        { recipe_id: 4, ingredient_id: 10, quantity: 4 + 1 / 3, unit_id: 3 },
        { recipe_id: 3, ingredient_id: 1, quantity: 12, unit_id: 3 },
        { recipe_id: 3, ingredient_id: 13, quantity: 2, unit_id: 12 },
        { recipe_id: 3, ingredient_id: 9, quantity: 3, unit_id: 2 },
        { recipe_id: 2, ingredient_id: 1, quantity: 3, unit_id: 4 },
        { recipe_id: 2, ingredient_id: 14, quantity: 3, unit_id: 1 }
      ]);
    });
};
