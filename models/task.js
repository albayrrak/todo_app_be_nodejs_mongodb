const mongoose = require('mongoose')
const { message } = require('../services/tasks')

const data = new Date()
const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, message('Title is required')],
        trim: true,
        maxlength: 30,
        minlength: 5,

    },
    description: {
        type: String,
        required: [true, message("Title is required")],
        trim: true,
        maxlength: 250,
        minlength: 15
    },
})



module.exports = mongoose.model('todos', TaskSchema)
