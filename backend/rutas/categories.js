const express = require('express')
const router = express.Router()
const Category = require('../modelos/categories') // importacion del modelo

// metodo get de inicio mi buen
router.get('/categories/get',(req, res) => {
    Category.find()
        .then(docs => {
            res.json(docs)
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({ error: 'Error al obtener las categorias' });
        })
})

module.exports = router