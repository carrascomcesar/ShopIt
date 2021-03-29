const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name
})

module.exports = mongoose.model('Product', productSchema)