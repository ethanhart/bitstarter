var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');

buffer = new Buffer(fs.readFileSync('index.html'), 'utf-8');
var display_text = buffer.toString('utf-8');

app.get('/', function(request, response) {
  response.send(display_text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
