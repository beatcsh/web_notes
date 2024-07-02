const mongoose = require('mongoose')

const categoriesSchema = new mongoose.Schema({
    name: String,
    userId: String,
},{ collection: 'categories' })

const Category = mongoose.model('Category',categoriesSchema)

module.exports = Category