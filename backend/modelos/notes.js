const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    userId: String,
    title: String,
    content: String,
    status: String,
    date: Date,
    categoryId: String
},{ collection: 'notes' })

const Note = mongoose.model('Note',notesSchema)

module.exports = Note