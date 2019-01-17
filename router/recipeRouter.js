const express = require("express");
const db = require("../helpers/functions");

const router = express.Router();

router.get("/", (req, res) => {
  // db.getRecipes()
  //   .then(recipes => res.status(200).json(recipes))
  //   .catch(err => res.status(500).json(err));
  console.log(db.getRecipes());
  db.getDishes();
});

module.exports = router;
