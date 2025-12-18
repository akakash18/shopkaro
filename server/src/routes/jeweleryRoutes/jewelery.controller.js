const Jewelery = require("../../models/JeweleryModel/jewelery.model");

exports.createJProduct = async (req, res) => {
  try {
    const jProduct = await Jewelery.create(req.body);
    res.status(201).json(jProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllJProducts = async (req, res) => {
  try {
    const jProduct = await Jewelery.find();
    res.status(200).json(jProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getJProductById = async (req, res) => {
  try {
    const jProduct = await Jewelery.findById(req.params.id);
    if (!jProduct)
      return res.status(404).json({ message: "product not found" });

    res.status(200).json(jProduct);
  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
};

exports.updateJProduct = async (req, res) => {
  try {
    const jProduct = await Jewelery.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!jProduct)
      return res.status(404).json({ message: "product not found" });

    res.status(200).json(jProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteJProduct = async (req, res) => {
  try {
    const jProduct = await Jewelery.findByIdAndDelete(req.params.id);

    if (!jProduct)
      return res.status(404).json({ message: "product not found" });

    res.status(200).json({ message: "products deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Invalid ID" });
  }
};
