const mongoose = require('mongoose');

let ObjectId = mongoose.Schema.Types.ObjectId;

let DetailSchema = mongoose.model('DetailSchema', {
	title: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	desc: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	}
});

let ParticipantSchema = mongoose.model('ParticipantSchema', {
	userId: {
		type: String,
		required: true
	},
	userImage: {
		type: String,
		required: true
	}
});

let Event = mongoose.model('Event', {
	_id: {
		type: ObjectId,
		required: true
	},
	creatorId: {
		type: String,
		required: true
	},
	creatorName: {
		type: String,
		required: true
	},
	createDate: {
		type: Number
	},
	eventDate: {
		type: Number
	},
	longitude: {
		type: Number,
		required: true
	},
	latitude: {
		type: Number,
		required: true
	},
	details: {
		type: {DetailSchema},
		required: true
	},
	participants: {
		type: {ParticipantSchema}
	}
});

module.exports = {Event};