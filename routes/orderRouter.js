const express = require('express');
const bodyParser = require('body-parser');

const orderRouter = express.Router();

orderRouter.use(bodyParser.json());

orderRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send a list of all order items to you');
})
.post((req, res) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /orders');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /orders');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end('Deleting all order items');
});

orderRouter.route('/:orderId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the order item: ${req.params.orderId} to you`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`Will post order item ${req.params.orderId} to your order total`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /orders');
})
.delete((req, res) => {
    res.statusCode = 403;
    res.end(`Deleting order item: ${req.params.orderId}`);
});

module.exports = orderRouter; 