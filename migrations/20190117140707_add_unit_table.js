exports.up = function(knex, Promise) {
  return knex.schema.createTable("units", function(tbl) {
    tbl.increments("id");
    tbl
      .string("name")
      .notNullable()
      .unique("uq_measurement_name");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("units");
};
