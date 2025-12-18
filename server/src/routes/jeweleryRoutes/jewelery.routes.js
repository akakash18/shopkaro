const express = require("express");
const {
  createJProduct,
  getAllJProducts,
  getJProductById,
  updateJProduct,
  deleteJProduct,
} = require("./jewelery.controller");

const jeweleryRoutes = express.Router();

jeweleryRoutes.post("/", createJProduct);
jeweleryRoutes.get("/", getAllJProducts);
jeweleryRoutes.get("/:id", getJProductById);
jeweleryRoutes.put("/:id", updateJProduct);
jeweleryRoutes.delete("/:id", deleteJProduct);

module.exports = jeweleryRoutes;
