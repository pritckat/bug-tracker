mongoose = require('mongoose')

const bugSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        unique: true,
    },
    description: {
        type: String,
        required: [true, 'Please describe the bug'],
    },
    severity: {
        type: Number,
        required: [true, 'Please rate the severity of the issue'],
    },
    created: {
        type: Date,
    },
    lastUpdated: {
        type: Date,
    },
})

const Bug = mongoose.model('Bug', bugSchema)
module.exports = Bug