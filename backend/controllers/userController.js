const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

//Function creation to generate tokens
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'})
}





//login user=> 
const loginUser = async (req, res) => {
    res.json({mssg: 'Login user'})
}




//signup user
const signupUser = async (req, res) => {
    //applying the hashing from Usermodels
    const {email, password} = req.body

    try{
        const user = await User.signup(email, password)

        //create token
        const token = createToken(user._id);

        res.status(200).json({email, token})
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

module.exports = { signupUser, loginUser}
//export to the user.js routes file