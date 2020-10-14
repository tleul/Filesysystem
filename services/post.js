const express = require('express');
const { title } = require('process');
fs = require('fs');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const tododata = 'user.json';
const data = require('../user.json');
router.post('/', (req, res) => {
	const { todoname, tododesc, duedate } = req.body;
	console.log(tododesc);
	todo = {
		id: uuidv4(),
		title: todoname,
		desc: tododesc,
		duedate,
	};

	data.push(todo);

	fs.writeFile(tododata, JSON.stringify(data), function (err) {
		if (err) return console.log(err);
		console.log('Hello World > helloworld.txt');
	});
	res.json(data);
});
module.exports = router;
