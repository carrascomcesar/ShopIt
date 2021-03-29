const Product = require('../models/product')

// Create new product = > /ap

exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "This route will show all products in Database."
    })
} 