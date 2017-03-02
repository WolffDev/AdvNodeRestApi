const express = require('express');
const bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');

const {mongoose} = require('./db/mongoose');
const Todo = require('./models/todo');
const User = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Add Todo
app.post('/todos', (req, res) => {
	let todo = new Todo({
		text: req.body.text
	});

	todo.save().then( (doc) => {
		res.send(doc)
	}, (e) => {
		res.status(400).send(e);
	});
});

// Get all Todos
app.get('/todos', (req, res) => {
	Todo.find().then( (todos) => {
		res.send( {todos} );
	}, (e) => {
		if(err) {
			res.status(400).send(e);
		}
	});
});

// Get single Todo
app.get('/todos/:id', (req, res) => {
	let id = req.params.id;

	if(!ObjectId.isValid(id)) {
		return res.status(404).send();
	}

	Todo.findById(id).then( (todo) => {
		if(!todo) {
			return res.status(404).send();
		}

		res.send( {todo} );

	}).catch( (e) => {
		res.status(400).send();
	})

});



app.listen(port, () => {
	console.log(`Started up at port ${port}`);
});

module.exports = {app};