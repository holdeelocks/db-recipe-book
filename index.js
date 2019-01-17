const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
// const db = require("./helpers/functions");
const dishRouter = require("./router/dishRouter");
const recipeRouter = require("./router/recipeRouter");

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use("/api/dishes", dishRouter);
server.use("/api/recipes", recipeRouter);

// db.getDishes();
// db.getRecipes();
// getDish(1);
// addDish({ name: "Maine Lobster Roll" });
// addRecipe({
//   dish_id: 1,
//   name: "Margherita Pizza",
//   instructions:
//     "Go fly to Italia. Take train to Naples. Get robbed. Then find a pizza place. Get replacement passport, fly home and enjoy tasty pizza"
// });

const port = 5000;

server.listen(port, () => console.log(`Server listening on ${port}`));
