const express = require('express')

//Setting up Express Router
const router = express.Router()

//GET all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workout'})
});

//GET a single workout
router.get('/:id', (req,res) => {
    res.json({mssg: 'GET a single workout'})
});

//POST a new workout
router.post('/', (req, res) =>{
    res.json({mssg: ' Post a new workout'})
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