const express = require("express");
const db = require("../helpers/dishesDb");

const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const dish = await db.getDish(id);
    if (!dish) {
      res.status(404).json({ error: "A dish with that ID does not exist" });
    } else {
      res.status(200).json(dish);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const dishes = await db.getDishes();
    res.status(200).json(dishes);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  const dish = req.body;
  try {
    const added = await db.addDish(dish);

    res.status(201).json(added);
  } catch (err) {
    if (err.errno === 19) {
      res.status(400).json({ error: "Please make sure to include a name" });
    } else {
      res.status(500).json(err);
    }
  }
});

module.exports = router;
