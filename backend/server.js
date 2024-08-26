const express = require('express')
const app = express()

// conexion a mongo con el archivo de conexion
const db = require('./conexion/conexion') 

// importar rutas
const ruta_notes = require('./rutas/notes')
const ruta_users = require('./rutas/users')
const ruta_categories = require('./rutas/categories')

// importar body parser

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/',ruta_notes)
app.use('/api/',ruta_users)
app.use('/api/',ruta_categories)

app.get('/',(req, res) => {
    res.end('Bienvenido al servidor de notas')
})

//servidor

app.listen(5000, function(){
    console.log('Jalando')
})
