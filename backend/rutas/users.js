const express = require('express')
const router = express.Router()
const User = require('../modelos/users') // importacion del modelo

// metodo get de inicio mi buen
router.get('/users/get',(req, res) => {
    User.find()
        .then(docs => {
            res.json(docs)
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({ error: 'Error al obtener los usuarios' });
        })
})

// buscar usuario
router.get('/users/login',(req,res) => {
    const userName = req.query.username
    if (!userName) {
        return res.status(400).json({error:"no existe parametro de entrada"})
    }

    User.findOne({username:userName})
    .then(user => {
        if (!user) {
            console.log('No existe una cuenta con ese nombre')
            return res.status(400).json({error:"no hay usuario con ese nombre"})
        }
        console.log('tenemos al tonto')
        res.json(user)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error:"Ocurrio un error"})
    })
})

module.exports = router