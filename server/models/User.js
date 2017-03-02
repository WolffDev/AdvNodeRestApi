const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	email: {
		type: String,
		required: true,
		trim: true,
		minlenght: 5
	}
});

module.exports = mongoose.model('User', userSchema);