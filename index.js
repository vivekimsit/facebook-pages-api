const express = require('express');

const app = express();

const APP_ID = process.env.APP_ID;

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/app-details', function(req, res) {
  return res.send({
    app_id: APP_ID
  });
});

app.listen(3000, function() {
  console.log('Server listening on port 3000!');
});
