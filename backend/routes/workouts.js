const express = require('express') //requiring express
const router = express.Router()//Setting up Express Router
const Workout = require('../models/workoutModel') //Requiring the schema info from moels

//GET all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workout'})
});

//GET a single workout
router.get('/:id', (req,res) => {
    res.json({mssg: 'GET a single workout'})
});

//POST a new workout. Async function inside try and catch
router.post('/', async (req, res) =>{
    const {title, load, reps} = req.body //Destructuring the data for the schema
    try{
        const workout = await Workout.create({title, load, reps});
        res.status(200).json(workout)
    } catch(error){
        res.status(400).json({error: error.message});
    }    
});

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