const express = require("express");
const db = require("../helpers/recipesDb");

const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await db.getRecipe(id);
    res.status(200).json(recipe);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const recipes = await db.getRecipes();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  const recipe = req.body;
  try {
    const success = await db.addRecipe(recipe);
    res.status(200).json(success);
  } catch (err) {
    if (err.errno === 19) {
      res
        .status(400)
        .json({ error: "Please make sure to include a name, dish_id and instructions" });
    } else {
      res.status(500).json(err);
    }
  }
});

module.exports = router;
