// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log("Unable to connect to MongoDB server", err);
	}
	console.log("Connected to MongoDB server!");

	// db.collection('Todos').find({
	// 	_id: new ObjectID('58b74cd6d35f6fa3ae752a22')
	// }).toArray().then((docs) => {
	// 	console.log("Todos:");
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log("Unable to fetch todos", err);
	// });
	
	db.collection('Todos').find().count().then((count, err) => {
		console.log(`Todos count: ${count}`);
	}, (err) => {
		console.log("Unable to fetch todos", err);
	});


	// db.collection('Users').find({name: 'Mette'}).count().then( (count, err) => {
	// 	console.log(`Users count: ${count}`);
	// 	if(err) {
	// 		console.log("Could not find the count", err);
	// 	}
	// });
	
	db.close();
});