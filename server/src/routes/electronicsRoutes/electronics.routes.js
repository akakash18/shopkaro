const express = require("express");
const {
  createEProduct,
  getAllEProducts,
  getEProductById,
  updateEProduct,
  deleteEProduct,
} = require("./electronics.controller");

const electronicsRoutes = express.Router();

electronicsRoutes.post("/", createEProduct);
electronicsRoutes.get("/", getAllEProducts);
electronicsRoutes.get("/:id", getEProductById);
electronicsRoutes.put("/:id", updateEProduct);
electronicsRoutes.delete("/:id", deleteEProduct);

module.exports = electronicsRoutes;
