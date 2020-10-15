const express = require('express');
filename = 'user.json';
file = require('../user.json');
const router = express.Router();

router.put('/', (req, res) => {
	const { newdesc, newtitle, id, newduedate } = req.body;

	const index = file.map((item) => item.id).indexOf(id);

	let newtodo = {
		id: id,
		title: newtitle,
		desc: newdesc,
		duedate: newduedate,
	};
	file.splice(index, 1, newtodo);
	fs.writeFile(filename, JSON.stringify(file), function (err) {
		if (err) console.log(err);
	});
	return res.json(file);
});
module.exports = router;
