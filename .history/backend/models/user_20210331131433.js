const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name.'],
        maxLength: [30, 'Your name cannot exceed 30 characters.']

    }
})

module.exports = mongoose.model('User', userSchema)