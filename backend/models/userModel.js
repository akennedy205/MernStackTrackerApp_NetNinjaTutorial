const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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

//Static method for SignUp.
userSchema.statics.signup = async function(email, password){
   const exists = await this.findOne({email}) //check if email already exists

   if (exists){
    throw Error('Email already in use')
   }

   //Password salting and hashing
   const salt = await bcrypt.genSalt(10)
   const hash = await bcrypt.hash(password, salt)

   const user = await this.create({email, password: hash})

   return user
}



module.exports = mongoose.model('User', userSchema)
//export to userController.js