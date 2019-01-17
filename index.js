const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dishRouter = require("./router/dishRouter");
const recipeRouter = require("./router/recipeRouter");

const server = express();
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use("/api/dishes", dishRouter);
server.use("/api/recipes", recipeRouter);

const port = 5000;

server.listen(port, () => console.log(`Server listening on ${port}`));
