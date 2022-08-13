const mongoose = require('mongoose')

//Creating the schema
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    
    //1st argument: the form of the schema
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
    //2nd argument--Timestamp info
}, { timestamps: true})

//Creating the model. Applies the schema to a model, then use it to interact with a collection of that name
module.exports = mongoose.model('Workout', workoutSchema)


