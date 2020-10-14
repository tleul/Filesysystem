const express = require('express');
filename = 'user.json';
file = require('../user.json');
const router = express.Router();

router.put('/', (req, res) => {
	console.log(file);
});
module.exports = router;
