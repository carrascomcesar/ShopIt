const Product = require('../models/product')

// Create new product = > /api/v1/product/new
exports.newProduct = async (req, res, next) =>
    

    
// Get all Products in Database
exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "This route will show all products in Database."
    })
} 