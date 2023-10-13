const express = require('express')
const bodyParser = require('body-parser')

var app = express()

const router = express.Router()

app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({extended:false}) )
app.use( router )

router.get('/mensaje', function(req, res) {
    console.log( req.headers )
    res.header({
        "custom-header":"Nuestro valor personalizado."
    })
    res.send('Lista de mensajes.')
})

router.post('/', function(req, res) {
    res.send('Hola desde POST.')
})

router.delete('/mensaje', function(req, res) {
    console.log( req.query )
    console.log( req.body )
    res.send( 'Mensaje eliminado correctamente. ' + req.body.texto1 + ' ' + req.body.texto2 )
})

router.put('/', function(req, res) {
    res.send('Hola desde PUT.')
})

router.patch('/', function(req, res) {
    res.send('Hola desde PATCH.')
})

let puerto = 3000
app.listen(puerto)
console.log(`La aplicacion se encuentra arriba en http://localhost:${puerto}`)