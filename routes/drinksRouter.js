const express = require('express');
const bodyParser = require('body-parser');

const drinkRouter = express.Router();

drinkRouter.use(bodyParser.json());

drinkRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send a list of drinks to you');
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /drinks');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /drinks');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /drinks');
});

drinkRouter.route('/:drinkId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the drink: ${req.params.drinkId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /drinks');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /drinks');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /drinks');
});

module.exports = drinkRouter; 