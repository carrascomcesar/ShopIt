const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters.']
    },
    price: {
        type: String,
        required: [true, 'Please enter product price'],
        trim: true,
        maxLength: [100, 'Product price cannot exceed 100 characters.']
    }
})

module.exports = mongoose.model('Product', productSchema)