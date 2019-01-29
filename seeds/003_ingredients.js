exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, name: "Meat" },
        { id: 2, name: "Eggs (quail)" },
        { id: 3, name: "Asparagus" },
        { id: 4, name: "chef's salad" },
        { id: 5, name: "Meaty sauce" },
        { id: 6, name: "chopped carrots" },
        { id: 7, name: "diced onions" },
        { id: 8, name: "angel hair pasta" },
        { id: 9, name: "pot" },
        { id: 10, name: "pizza sauce" },
        { id: 11, name: "sliced mushrooms" },
        { id: 12, name: "italian sausage" },
        { id: 13, name: "milk" },
        { id: 14, name: "ghost pepper" }
      ]);
    });
};
