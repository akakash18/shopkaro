const mensData = require("../../models/mensModel/mens.model");

// console.log(mensData)

function getAllMensProducts(req, res) {
  res.send(mensData);
}

module.exports = { getAllMensProducts };
