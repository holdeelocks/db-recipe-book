exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("dishes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("dishes").insert([
        { id: 1, name: "Pizza" },
        { id: 2, name: "Meat Soup" },
        { id: 3, name: "Milk Balls" },
        { id: 4, name: "Mac & Cheese" },
        { id: 5, name: "Chicken Shwarma" },
        { id: 6, name: "Quail Eggs" }
      ]);
    });
};
