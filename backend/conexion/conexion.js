const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/notes_app')

const db = mongoose.connection

db.on('connected',() =>{console.log('conectado')})
db.on('error',() =>{console.log('fallamos')})

module.exports = mongoose