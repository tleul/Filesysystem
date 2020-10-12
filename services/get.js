const express = require('express');
const fs = require('fs');
const router = express.Router();
const tododata = 'user.json';
router.get('/', (req, res) => {
	fs.readFile(tododata, function (err, data) {
		res.json(JSON.parse(data));
	});
});
module.exports = router;
