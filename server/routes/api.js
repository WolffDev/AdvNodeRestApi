const routes = require('express').Router();

const event = require('./event.js');

routes.use('/event', event);

module.exports = routes;