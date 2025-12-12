const express = require("express");
const { getAllWomensProducts } = require("./womens.controller");

const womensRouter = express.Router();

womensRouter.get("/", getAllWomensProducts);

module.exports = womensRouter;
