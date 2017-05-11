const routes = require('express').Router();

const event = require('./event.js');

const eventList = require('./eventList.js');

routes.use('/event', event);
routes.use('/eventlist', eventList);

module.exports = routes;