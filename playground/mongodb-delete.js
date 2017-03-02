// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log("Unable to connect to MongoDB server", err);
	}
	console.log("Connected to MongoDB server!");

	// deleteMany
	// db.collection('Todos').deleteMany({text: 'Spis mad'}).then( (result) => {
	// 	console.log(result);
	// 	// n = numer delete
	// });

	// deleteOne
	// db.collection('Todos').deleteOne({text: 'Spis mad'}).then( (result) => {
	// 	console.log(result);
	// });

	// findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed: false}).then( (result) => {
	// 	console.log(result);
	// });

	// db.collection('Users').deleteMany({name: 'Mette'}).then( (result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndDelete({_id: new ObjectID('58b752329dde30a42a61da8a')}).then( (result) => {
		console.log(result.value);
	});

	db.close();
});