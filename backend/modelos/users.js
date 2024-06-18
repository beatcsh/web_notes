const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    pass: {type: String, required: true},
    avatar: String,
},{ collection: 'users' })

const User = mongoose.model('User',usersSchema)

module.exports = User