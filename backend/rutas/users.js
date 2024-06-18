const express = require('express')
const router = express.Router()
const Note = require('../modelos/users') // importacion del modelo

// metodo get de inicio mi buen
router.get('/users/get',(req, res) => {
    Note.find()
        .then(docs => {
            res.json(docs)
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({ error: 'Error al obtener los usuarios' });
        })
})

module.exports = router