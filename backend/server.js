//calling environment variable for host
require('dotenv').config()
//Requiring the Express.js module
const express = require('express');


//Start up app. Invokes Express function
const app = express();

//adding middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

//Route Handlers
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})

//Setting up port--listen for requests
app.listen(process.env.PORT, () => {
    console.log(`Listening now on http://localhost:${process.env.PORT}`)
});

process.env