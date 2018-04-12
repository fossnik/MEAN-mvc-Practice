let express = require('express');
let app = express();

// app.get('/', function (request, response) {
// 	response.sendFile(__dirname + '/public/index.html');
// });
app.use(express.static('public'));

app.listen(8000);