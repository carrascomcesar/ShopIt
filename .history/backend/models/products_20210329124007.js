const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter product name']
    }
})

module.exports = mongoose.model('Product', productSchema)