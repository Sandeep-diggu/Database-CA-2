const mongoose = require('mongoose');

// Define a schema for a sample collection
const sampleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    director: {
        type: String,
        required: true,
        trim: true
    },
    gerne: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    releaseYear: {
        type: Date,
        default: Date.now
    },
    availableCopies: {
        type: Number,
        required: true
    }
});

// Create a model from the schema
const SampleModel = mongoose.model('Sample', sampleSchema);

module.exports = SampleModel;