exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipes", function(tbl) {
    tbl.increments("id");
    tbl
      .string("name", 128)
      .notNullable()
      .unique("uq_recipe_name");
    tbl
      .integer("dish_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("dishes");
    tbl
      .string("instructions")
      .notNullable()
      .unique("uq_recipe_instructions");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipes");
};
