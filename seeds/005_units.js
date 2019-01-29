exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("units")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("units").insert([
        { id: 1, name: "tsp(s)" },
        { id: 2, name: "tbsp(s)" },
        { id: 3, name: "oz" },
        { id: 4, name: "cup(s)" },
        { id: 5, name: "gallon(s)" },
        { id: 6, name: "lb(s)" },
        { id: 7, name: "medium" },
        { id: 8, name: "stalks" }
      ]);
    });
};
