const express = require('express')
const router = express.Router()
const User = require('../modelos/users') // importacion del modelo

// metodo get de inicio mi buen
router.get('/users/get', (req, res) => {
    User.find()
        .then(docs => {
            res.json(docs)
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({ error: 'Error al obtener los usuarios' });
        })
})

// con este metodo voy a ver si puedo crear usuarios xd usando post, capaz como  es express se hace con el de DEL
router.post('/users/add', (req, res) => {
    const { username, email, pass, avatar } = req.body;
    if (!username || !pass) {
        res.status(400).json({ result: "ocupo la contraseña y el username papito" })
    }
    const newUser = new User({
        username,
        email,
        pass,
        avatar
    })
    newUser.save()
        .then(user => {
            console.log('bien hecho we: ', user)
            res.status(201).json({ result: "todo bien we" })
        })
        .catch(err => {
            console.error("no se pudo", err)
            return res.status(500).json({ error: "error interno" })
        })
})

// este es el login, esta bastante chido la vdd
router.get('/users/login', (req, res) => {

    const {username,pass} = req.body
    if (!username || !pass) return res.status(400).json({ error: "no me diste nada cabron" })

    User.findOne({username})
        .then(user => {
            if (!user) return res.status(404).json({err:"aver si creas una cuenta o la escribes bien"})
            user.comparePassword(pass,(err,isMatch) => {
                if (err) return res.status(500).json({error:"tenemos inconvenientes"})
                if (!isMatch) return res.status(401).json({error:"aver si te aprendes tu contraseña"})
                
                res.json("Todo esxcelente: "+user)
            })
        })
        .catch(err => {
            res.status(500).json({error:"tenemos inconvenientes"})
        })
})

// obtener uno, esto nos sirve para verificar el usuario dentro de la app
router.get('/users/get_one', (req, res) => {
    User.findOne({ _id: req.body._id })
        .then(user => {
            if (!user) {
                console.log('error, no lo encuentra')
            }
            console.log('encontrado' + user)
            res.json(user)
        })
        .catch(err => {
            console.error(err);
        });
});

// aqui no conocemos el put mi cabron
router.post('/users/upd', (req, res) => {
    User.findOneAndUpdate({ _id: req.body._id }, {
        username: req.body.username,
        email: req.body.email,
        pass: req.body.pass,
        avatar: req.body.avatar
    })
    .then(user => {
        res.status(200).json("Todo bien con este usuario: "+user)
    })
    .catch(err => {
        console.error(err);
    });
})

// para borrar usando post pq no nos gusta el delete
router.post('/users/del', (req, res) => {
    User.findOneAndDelete({_id:req.body._id})
        .then(user => {
            res.status(202).json({content:"todo excelente"})
            // res.send('ya quedo')
        })
        .catch(err => {
            res.status(500).json({content:"tenemos problemas we"})
            // res.send(err)
        })
})

module.exports = router