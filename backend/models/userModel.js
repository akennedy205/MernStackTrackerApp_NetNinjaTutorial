const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

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
    //validation

    if (!email || !password){ //Check if email and password fields are NOT filled
        throw Error('All fields must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid. Please enter a different email') //Check if email is actually an email
    }
    if (!validator.isStrongPassword(password)){
        throw Error('Password not strong enough') //Check if password is strong enough
    }


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