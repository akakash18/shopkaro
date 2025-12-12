const express = require("express")
const {getAllMensProducts} = require("./mens.controller")

const mensRouter = express.Router();

mensRouter.get("/",getAllMensProducts);

module.exports = mensRouter;