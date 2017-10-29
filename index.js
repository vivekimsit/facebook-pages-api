const express = require('express');

const app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/oauth', function(req, res) {
  console.log(req);
  console.log(res);
});

app.listen(3000, function() {
  console.log('Server listening on port 3000!');
});
