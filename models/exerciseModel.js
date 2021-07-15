const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Below will be the schema for our Workout Object
const ExerciseSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },

    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "You must provide the type of exercise"
        },
        name: {
            type: String,
            trim: true,
            unique: true,
            required: "You must name this exercise"
        },
        duration: {
            type: Number,
            required: "Please enter the duration of this exercise"
        },