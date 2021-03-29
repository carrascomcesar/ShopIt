const Product = require("../models/products");

// Create new product = > /api/v1/product/new
exports.newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    message: "Product was successfully created.",
    product,
  });
};

// Get ALL Products in Database
exports.getProducts = (req, res, next) => {
  const products = await Product.find() 
  res.status(200).json({
    success: true,
    message: "This route will show all products in Database.",
  });
};
