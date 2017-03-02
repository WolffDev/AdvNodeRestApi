const {ObjectId} = require('mongodb');
const mongoose = require('./../server/db/mongoose');
const Todo = require('./../server/models/todo');

var id = '58b7f651f111397eabaec424';
var id2 ='68b7f623f111397eabaec4zz';

if(!ObjectId.isValid(id2)) {
	console.log("Im not valid");
}

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log(todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log(todo);
// });

// Todo.findById(id).then((todo) => {
// 	console.log(todo);
// });

// Handling noID
Todo.findById(id2).then((todo) => {
	if(!todo) {
		return console.log("ID not found");
	}
	console.log(todo);
}).catch( (e) => console.log(e));

