var express = require('express'),
	fs = require('fs'),
	path = require('path');

var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/api/lessons', function (req, res) {
	fs.readFile('lessons.json', function(err, data) {
		res.json(JSON.parse(data));
	});
});


var server = app.listen(3000, function () {});