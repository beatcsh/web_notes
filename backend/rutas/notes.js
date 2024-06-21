const express = require('express')
const router = express.Router()
const Note = require('../modelos/notes') // importacion del modelo

// metodo get de inicio mi buen
router.get('/notes/get', (req, res) => {
    Note.find()
        .then(docs => {
            res.json(docs)
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({ error: 'Error al obtener las notas' });
        })
})

// metodo de obtener una con la busqueda del titulo
router.get('/notes/search', (req, res) => {
    Note.findOne({ title: req.body.title })
        .then(note => {
            if (!note) return res.status(404).json({ msg: "no se encontro" })
            res.status(200).json({ msg: "todo esta bien se encontro" })
            console.log(note)
        })
        .catch(err => {
            res.status(500).json({ err: "hubo un pedo aca en el servidor" })
            console.log(err)
        })
})

// metodo de crear notas, solo se crea una a la vez
router.post('/notes/add', (req, res) => {
    const title = req.body.title
    const content = req.body.title
    if (!title || !content) return res.status(400).json({ error: "no me diste nada cabron" })

    const newNote = new Note({
        userId: req.body.userId,
        title,
        content,
        status: req.body.status,
        date: new Date(),
        categoryId: req.body.categoryId,
    })

    newNote.save()
        .then(note => {
            res.status(200).json({ msg: "todo bien we" })
            console.log(note)
        })
        .catch(err => {
            res.status(500).json({ err: "hubo unos pedillos" })
            console.log(err)
        })
})


// tambien aqui por si acaso
router.get('/notes/get_one', (req, res) => {
    Note.findOne({ _id: req.body._id })
        .then(note => {
            if (!note) {
                console.log('error, no lo encuentra')
            }
            console.log('encontrado' + note)
            res.json(note)
        })
        .catch(err => {
            console.error(err);
        });
});

// con esto vamos a actualizar, voy a probar el put
router.put('/notes/upd', (req, res) => {
    Note.findOneAndUpdate({ _id: req.body._id }, {
        title: req.body.title,
        content: req.body.content,
        status: req.body.status,
        categoryId: req.body.categoryId
    })
        .then(note => {
            res.status(200).json("Todo bien con este usuario: " + note)
        })
        .catch(err => {
            console.error(err);
        });
})

// para borrar, usare delete para ver que pedo
router.delete('/notes/del', (req, res) => {
    Note.findOneAndDelete({_id:req.body._id})
        .then(note => {
            res.status(202).json({content:"todo excelente"})
            // res.send('ya quedo')
        })
        .catch(err => {
            res.status(500).json({content:"tenemos problemas we"})
            // res.send(err)
        })
})

module.exports = router