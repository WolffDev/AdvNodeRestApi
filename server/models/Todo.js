const mongoose = require('mongoose');

let todoSchema = mongoose.Schema({
	text: {
		type: String,
		required: true,
		minlenght: 3,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

module.exports = mongoose.model('Todo', todoSchema);