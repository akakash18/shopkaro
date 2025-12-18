// const eData = require("../../models/electronicsModel/electronics.model");

// function getAllElectronicsProducts(req, res) {
//   res.send(eData);
//   //   console.log(eData);
// }

// module.exports = { getAllElectronicsProducts };


const Product = require('../../models/electronicsModel/electronics.model');

// CREATE product
exports.createEProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// READ all products
exports.getAllEProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// READ product by ID
exports.getEProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product)
      return res.status(404).json({ message: 'product not found' });

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: 'Invalid ID' });
  }
};

// UPDATE product
exports.updateEProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!product)
      return res.status(404).json({ message: 'product not found' });

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE 
exports.deleteEProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product)
      return res.status(404).json({ message: 'product not found' });

    res.status(200).json({ message: 'products deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Invalid ID' });
  }
};
