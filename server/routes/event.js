const routes = require('express').Router();
const {ObjectId} = require('mongodb');

const {Event} = require('../models/Event.js');

// Add Event
routes.post('/', (req, res) => {

	let event = new Event({
		eventId: req.body.eventId,
		creatorId: req.body.creatorId,
		createDate: req.body.createDate,
		eventDate: req.body.eventDate,
		longitude: req.body.longitude,
		latitude: req.body.latitude,
		details: req.body.details,
		participants: req.body.participants
	});

	event.save().then( (doc) => {
		res.send(doc)
	}, (e) => {
		res.status(400).send(e)
	});
});

// Get All Events
routes.get('/', (req, res) => {
	Event.find().then( (events) => {
		res.send( {events} );
	}, (e) => {
		if(err) {
			res.status(400).send(e);
		}
	});
});

// Get Single Event

routes.get('/:id', (req, res) => {
	let id = req.params.id

	if(!ObjectId.isValid(id)) {
		return res.status(404).send();
	}

	Event.findById(id).then( (event) => {
		if(!event) {
			return res.status(404).send("Invalid ID");
		}

		res.send( {event} );
	}).catch( (e) => {
		res.status(400).send(e);
	})
});

module.exports = routes;