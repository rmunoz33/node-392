const express = require('express');
const bodyParser = require('body-parser');

const foodRouter = express.Router();

foodRouter.use(bodyParser.json());

foodRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send a list of food items to you');
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /foods');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /foods');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /foods');
});

foodRouter.route('/:foodId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the food item: ${req.params.foodId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /foods');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /foods');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /foods');
});

module.exports = foodRouter; 