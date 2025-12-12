const womensData = require("../../models/womensModel/womens.model");

function getAllWomensProducts(req, res) {
  res.send(womensData);
}

module.exports = { getAllWomensProducts };
