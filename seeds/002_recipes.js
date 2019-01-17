exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          id: 1,
          dish_id: 1,
          name: "Southwestern Pizza",
          instructions: "Make a pizza, but in the southwest"
        },
        {
          id: 2,
          dish_id: 2,
          name: "Spicy Meat Soup",
          instructions: "Add spicy and then make it nice and soupy"
        },
        {
          id: 3,
          dish_id: 3,
          name: "Creamy Southern Milk Balls",
          instructions: "Make them extra sloppy"
        },
        {
          id: 4,
          dish_id: 6,
          name: "Eggy Quail Eggs n' Special Sauce",
          instructions:
            "Make the super secret special sauce, then boil Quail eggs until extremely hard. Next, throw eggs against a wall and peel shell. Finally, layer secret sauce and eggs into bowl and serve"
        }
      ]);
    });
};
