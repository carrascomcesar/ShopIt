const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
    trim: true,
    maxLength: [100, "Product name cannot exceed 100 characters."],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
    maxLength: [6, "Product price cannot exceed 6 characters."],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  ratings: {
    type: Number,
    default: 0
    },
    images: [
        {
        [   public_id: {
            type: String,
                required: true,

            },
            url: {
                type: String,
                required: true
        }]
        }
    ],
category: {
    type: String,
        required: [true, 'Please select category for this product'],
                enum: [
                    'Electronics',
                    'Sports',
                    'Home',
                    'Outdoor',
                    'Food',
                    'Books',
                    'Clothes'
                ]
    }
});

module.exports = mongoose.model("Product", productSchema);
