const express = require("express");
const {getAllElectronicsProducts} = require("./electronics.controller")

const electronicsRoutes = express.Router();

electronicsRoutes.get("/",getAllElectronicsProducts);

module.exports = electronicsRoutes;

