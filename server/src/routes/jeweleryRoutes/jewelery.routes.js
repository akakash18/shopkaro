const express = require("express");
const { getAllJeweleryProducts } = require("./jewelery.controller");

const jeweleryRouter = express.Router();

jeweleryRouter.use("/", getAllJeweleryProducts);

module.exports = jeweleryRouter;
