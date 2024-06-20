const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const usersSchema = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    pass: {type: String, required: true},
    avatar: String,
},{ collection: 'users' })

// con esta funcion vamos a a añadir middleware de pre guardado pa poder hashear las contras
usersSchema.pre('save', function (next) {
    const user=this
    if (!user.isModified('pass')) return next()
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err)
        bcrypt.hash(user.pass, salt, (err,hash) => {
            if (err) return next(err)
            user.pass = hash
            next()
        })
    })
})

// creare un metodo para comparar contraseñas
usersSchema.methods.comparePassword = function (candidatePassword, callback) {
    // si encontramos un usuario con el nombre tomamos la contraseña que tiene asociada y la comparamos con la que estamos enviando
    bcrypt.compare(candidatePassword, this.pass, (err, isMatch) => {
        if (err) return callback(err)
        callback(null,isMatch)
    })
}

const User = mongoose.model('User',usersSchema)
module.exports = User