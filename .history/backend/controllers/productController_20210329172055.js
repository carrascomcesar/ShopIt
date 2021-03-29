const Product = require("../models/products");

// Get SINGLE Product FROM Database => /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {
  const product = await Product.findById((id = req.params.id));

  if (!product) {
    return res.status()
  }
  res.status(200).json({
    success: true,
    count: products.length,
    products,
  });
};
// Create new product = > /api/v1/product/new
exports.newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    message: "Product was successfully created.",
    product,
  });
};

// Get ALL Products in Database => /api/v1/products
exports.getProducts = async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    count: products.length,
    products,
  });
};
