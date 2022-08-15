const express = require('express') //require Express

//Importing controller functions from userController.js file
const {signupUser, loginUser} = require('../controllers/userController')



const router = express.Router()

//login route
router.post('/login', loginUser)





//sign up route
router.post('/signup', signupUser)




module.exports = router