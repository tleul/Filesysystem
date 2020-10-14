const express = require('express');
const app = express();

PORT = process.env.PORT || 5000;
app.use(express.json());
app.use('/api/delete', require('./services/delete'));

app.use('/api/post', require('./services/post'));

app.use('/api/put', require('./services/put'));

app.use('/api/get', require('./services/get'));

app.listen(PORT, () => {
	console.log('Server ---- Connected ');
});
