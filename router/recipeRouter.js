const express = require("express");
const db = require("../helpers/recipesDb");

const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await db.getRecipe(id);
    res.status(200).json(recipe);
  } catch (err) {
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
    err.errno === 19
      ? res
          .status(400)
          .json({ error: "Please make sure to include a name, dish_id and instructions" })
      : res.status(500).json(err);
    // if (err.errno === 19) {
    //   res
    //     .status(400)
    //     .json({ error: "Please make sure to include a name, dish_id and instructions" });
    // } else {
    //   res.status(500).json(err);
    // }
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const dish = req.body;
  try {
    const updated = await db.updateRecipe(dish, id);
    updated === 0
      ? res.status(400).json({ error: "A recipe with that id does not exist" })
      : res.status(203).json(updated);
    // if (updated === 0) {
    //   res.status(400).json({ error: "A recipe with that id does not exist" });
    // } else {
    //   res.status(203).json(updated);
    // }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const removed = await db.deleteRecipe(id);
    removed === 0
      ? res.status(400).json({ error: "A recipe with that id does not exist" })
      : res.status(200).json(removed);
    // if (removed === 0) {
    //   res.status(400).json({ error: "A recipe with that id does not exist" });
    // } else {
    //   res.status(200).json(removed);
    // }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
