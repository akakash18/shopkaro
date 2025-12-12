const eData = require("../../models/electronicsModel/electronics.model");

function getAllElectronicsProducts(req, res) {
  res.send(eData);
  //   console.log(eData);
}

module.exports = { getAllElectronicsProducts };
