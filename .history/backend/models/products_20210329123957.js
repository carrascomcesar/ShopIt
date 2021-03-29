const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        r
    }
})

module.exports = mongoose.model('Product', productSchema)