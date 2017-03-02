// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log("Unable to connect to MongoDB server", err);
	}
	console.log("Connected to MongoDB server!");

	// db.collection('Todos').findOneAndUpdate({
	// 	_id: new ObjectID('58b7677294a367c0184e89bd')
	// }, {
	// 	$set: {
	// 		completed: true
	// 	}
	// }, {
	// 	returnOriginal: false
	// }). then( (result) => {
	// 	console.log(result);
	// });

	
	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('58b751a8ca04c4a408378c3d')
	}, {
		$set: { name: 'Caroline' },
		$inc: { age: 1 }
	}, { returnOriginal: false})
	.then( (result) => {
		console.log(result.value);
	});

	db.close();
});