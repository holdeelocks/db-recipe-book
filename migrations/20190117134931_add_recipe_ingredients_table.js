exports.up = function(knex, Promise) {
  return knex.schema.createTable("recipe_ingredients", function(tbl) {
    tbl
      .integer("recipe_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("recipes");
    tbl
      .integer("ingredient_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ingredients");
    tbl.primary(["ingredient_id", "recipe_id"]);
    tbl
      .integer("quantity")
      .unsigned()
      .notNullable();
    tbl
      .integer("unit_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("units");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipe_ingredients");
};
