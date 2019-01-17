const express = require("express");
const db = require("../helpers/recipe_ingredientsDb");

const router = express.Router();

router.post("/", async (req, res) => {
  const ingredients = req.body;
  try {
    const numberAdded = await db.addRecipeIngredient(ingredients);
    if (numberAdded === 0) {
      res
        .status(400)
        .json({ error: "Please include recipe and ingredients ids, quantity and units id" });
    } else {
      res.status(201).json(numberAdded);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:recipe/:ingredient", async (req, res) => {
  const { recipe, ingredient } = req.params;
  try {
    const numberDeleted = await db.removeRecipeIngredient(recipe, ingredient);
    if (numberDeleted === 0) {
      res.status(400).json({ error: "Please include both ingredient and recipe ids" });
    } else {
      res.status(200).json(numberDeleted);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
