const express = require('express');
const { title } = require('process');
fs = require('fs');
const router = express.Router();
const tododata = 'user.json';
const data = require('../user.json');
router.post('/', (req, res) => {
	const { title, desc } = req.body;
	todo = {
		id: 1,
		title: 'first TODO',
		desc: 'This is the first to do to be tested ',
	};

	data.push(todo);

	fs.writeFile(tododata, JSON.stringify(data), function (err) {
		if (err) return console.log(err);
		console.log('Hello World > helloworld.txt');
	});
	res.json(data);
});
module.exports = router;
