require('dotenv').config() //calling environment variable for host
const express = require('express'); //Requiring the Express.js module
const mongoose = require('mongoose'); //Requiring Mongoose
const workoutRoutes = require('./routes/workouts')//Importing the workout routes from workout.js


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

mongoose.connect(process.env.MONGO_URI) //Connect to the DB using the MONGO URI link in .env file
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Connected to db & listening now on http://localhost:${process.env.PORT}`)
        });
    })
    .catch((error) => {
        console.log(error)
    })

process.env