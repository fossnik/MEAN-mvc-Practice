let express = require('express');
let app = express();

app.use(express.static('public'));

app.get('/blocks', function (request, response) {
	let blocks = ['Fixed', 'Movable', 'Rotating'];
	response.json(blocks);
});

app.listen(8000);