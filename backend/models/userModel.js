const mongoose = require('mongoose')

//creating Schema for usernames and passwords
const Schema= mongoose.Schema
const userSchema = new Schema ({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)
//export to userController.js