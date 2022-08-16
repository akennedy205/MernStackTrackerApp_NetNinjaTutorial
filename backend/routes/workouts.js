const express = require('express') //requiring express
const router = express.Router()//Setting up Express Router

const { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController') //Importing the controller functions
const requireAuth = require('../middleware/requireAuth')

//require auth for all workout routes
router.use(requireAuth)

//GET all workouts
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id', getWorkout)

//POST a new workout. Async function inside try and catch
router.post('/', createWorkout )

//DELETE a workout
router.delete('/:id', deleteWorkout);

//UPDATE a workout
router.patch('/:id', updateWorkout)

module.exports = router
//Exporting router