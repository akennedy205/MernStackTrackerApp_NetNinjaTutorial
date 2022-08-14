const express = require('express') //requiring express
const router = express.Router()//Setting up Express Router

const { createWorkout, getWorkouts, getWorkout } = require('../controllers/workoutController') //Importing the controller functions

//GET all workouts
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id', getWorkout)

//POST a new workout. Async function inside try and catch
router.post('/', createWorkout )

//DELETE a workout
router.delete('/:id', (req, res) =>{
    res.json({mssg: 'DELETE a workout'})
});

//UPDATE a workout
router.patch('/:id', (req, res) =>{
    res.json({mssg: 'UPDATE a workout'})
});

module.exports = router
//Exporting router