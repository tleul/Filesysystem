const express = require('express');

const todolist = require('../user.json');
const filename = 'user.json';
const router = express.Router();

router.delete('/', (req, res) => {});
module.exports = router;
