let express = require('express');
let app = express();

app.get('/', function(request, response) {
	response.send('Hello World');
});

app.listen(3000);