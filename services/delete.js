const express = require('express');

const todolist = require('../user.json');
const filename = 'user.json';
const router = express.Router();

router.delete('/:id', (req, res) => {
	const updated = todolist.filter((todo) => todo.id !== req.params.id);

	fs.writeFile(filename, JSON.stringify(updated), function (err) {
		if (err) console.log(err);
	});
	return res.json(updated);
});
module.exports = router;
