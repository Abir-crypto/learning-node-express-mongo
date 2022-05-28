const express = require('express')
const bodyParser = require('body-parser')

const hogaRouter = express.Router()

hogaRouter.use(bodyParser.json())

hogaRouter.route('/').all((req, res, next) => {
    res.statusCode = 200
    res.type('Content-type', 'text/plain')
    next()
    })
    .get((req, res, next) => {
        res.end("Shobar hoga mara hobe")
    })
    .post((req, res, next) => {
        res.end('Hoga add: ' + req.body.hoga + 'Pasa: ' + req.body.pasa)
    })
    .put((req, res, next) => {
        res.statusCode = 403
        res.end('Bhag bosudike')
    })
    .delete((req, res, next) => {
        res.end('Deleting all hogas')
    });
    
    
hogaRouter.route('/:unqID').all((req, res, next) => {
        res.statusCode = 200
        res.type('Content-type', 'text/plain')
        next()
    })
    .get((req, res, next) => {
        res.end("Details of the hoga: " + req.params.unqID)
    })
    .post((req, res, next) => {
        res.statusCode = 403
        res.end('Bhag bosudike')
    })
    .put((req, res, next) => {
        res.write('Updating hoga no: ' + req.params.unqID + 'M A R A K H A')
        res.end('the details of the hoga: ' + req.body.hoga + ' pasa : ' + req.body.pasa)
    })
    .delete((req, res, next) => {
        res.end('Deleting hoga no : ' + req.params.unqID)
    });

module.exports = hogaRouter