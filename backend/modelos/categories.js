const mongoose = require('mongoose')

const categoriesSchema = new mongoose.Schema({
    name: String,
    userID: String,
},{ collection: 'categories' })

const Category = mongoose.model('Category',categoriesSchema)

module.exports = Category