const express = require('express');

const todolist = require('../user.json');
const filename = 'user.json';
const router = express.Router();

router.delete('/${id}', (req, res) => {
	const updated = todolist.filter((todo) => todo.id !== req.params.id);

	fs.writeFile(filename, updated, function writeJson(err, data) {
		console.log(data);
	});
});
module.exports = router;
