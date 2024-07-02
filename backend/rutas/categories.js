const express = require('express')
const router = express.Router()
const Category = require('../modelos/categories') // importacion del modelo

// metodo get de inicio mi buen, solo trae todas las categorias sin importar el usuario
router.get('/categories/get', (req, res) => {
    Category.find()
        .then(docs => {
            res.json(docs)
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({ error: 'Error al obtener las categorias' });
        })
})

// en los metodos get nunca se mandan los metodos con un req.body siempre usar req.query
router.get('/categories/get_user_cat', (req,res) => {
    Category.find({userID: req.query._id})
    .then(docs => {
        res.json(docs)
        console.log('todo chido')
    })
    .catch(err => {
        console.error(err)
        res.status(500).json({ error: 'Error al obtener las categorias' });
    })
})

// 
router.post('/categories/add', (req,res) => {
    const name = req.body.name
    const user_id = req.body._id

    if (typeof name !== 'string' || !name || !user_id) return res.status(400).json({ error: "no se puede asi, verifica los datos de entrada" })

    const newCategory = new Category ({
        name:name,
        userId:user_id
    })

    newCategory.save()
    .then(cat => {
        res.status(200).json(cat)
    })
    .catch(err => {
        console.error(err)
        res.status(500).json({ error: 'Error al crear las categorias' });
    })
})

router.put('/categories/upd', (req,res) => {
    Category.findOneAndUpdate({_id: req.body._id}, {
        name: req.body.name
    })
    .then(cat => {
        res.status(200).json(cat)
    })
    .catch(err => {
        console.error(err)
        res.status(500).json({ error: 'Error al actualizar' });
    })
})

router.delete('/categories/del', (req,res) => {
    Category.findOneAndDelete({_id:req.body._id})
    .then(cat => {
        res.status(200).json({msj:"todo chido"})
    })
    .catch(err => {
        res.status(500).json({error:"todo mal, ni pa borrar sirves"})
    })
})
 
module.exports = router