//calling environment variable for host
require('dotenv').config()
//Requiring the Express.js module
const express = require('express');
//Importing the workout routes from workout.js
const workoutRoutes = require('./routes/workouts')


//Start up app. Invokes Express function
const app = express();

//adding middleware
app.use(express.json()) //Any request that comes in, it will look to see if there is some data coming with the request and will parse it

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});

//Route Handlers
app.use('/api/workouts', workoutRoutes)

//Setting up port--listen for requests
app.listen(process.env.PORT, () => {
    console.log(`Listening now on http://localhost:${process.env.PORT}`)
});

process.env