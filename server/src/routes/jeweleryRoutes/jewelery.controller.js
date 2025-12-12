const jeweleryData = require("../../models/JeweleryModel/jewelery.model");

function getAllJeweleryProducts(req, res) {
  res.send(jeweleryData);
}

module.exports = { getAllJeweleryProducts };
