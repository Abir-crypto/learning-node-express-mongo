const express = require('express')
const http = require('http')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const hogaRouter = require('./routes/hogaRouter')

const hostname = 'localhost'
const port = 3000

const app = express()



app.use(morgan('dev'))
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())

app.use('/hoga', hogaRouter)

const server = http.createServer(app)

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`);
})

// app.all('/hoga', (req, res, next) => {
//     res.statusCode = 200
//     res.setHeader('Content-type', 'text/plain')
//     next()
// })

// app.get('/hoga', (req, res, next) => {
//     res.end("Shobar hoga mara hobe")
// })

// app.post('/hoga', (req, res, next) => {
//     res.end('Hoga add: ' + req.body.hoga + 'Pasa: ' + req.body.pasa)
// })

// app.put('/hoga', (req, res, next) => {
//     res.statusCode = 403
//     res.end('Bhag bosudike')
// })

// app.delete('/hoga', (req, res, next) => {
//     res.end('Deleting all hogas')
// })

// app.get('/hoga/:unqID', (req, res, next) => {
//     res.end("Details of the hoga: " + req.params.unqID)
// })

// app.post('/hoga/:unqID', (req, res, next) => {
//     res.statusCode = 403
//     res.end('Bhag bosudike')
// })

// app.put('/hoga/:unqID', (req, res, next) => {
//     res.write('Updating hoga no: ' + req.params.unqID + 'M A R A K H A')
//     res.end('the details of the hoga: '+ req.body.hoga + ' pasa : '+ req.body.pasa)
// })

// app.delete('/hoga/:unqID', (req, res, next) => {
//     res.end('Deleting hoga no : '+ req.params.unqID)
// })

// app.use((req, res, next) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/html')
//     res.end('<html><body><h1>This is an Express server</h1></body></html>')
// })

