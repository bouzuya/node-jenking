var express = require('express');
var request = require('request');
var TimeBomb = require('./time-bomb').TimeBomb;

var PORT = parseInt((process.env.PORT || '3000'), 10);
var TIMEOUT = parseInt((process.env.JENKING_TIMEOUT || '10000'), 10);
var CALLBACK = JSON.parse(process.env.JENKING_CALLBACK || '""');

if (isNaN(PORT))
  throw new Error('invalid port : ' + process.env.PORT);
if (isNaN(TIMEOUT))
  throw new Error('invalid timeout : ' + process.env.JENKING_TIMEOUT);
if (!CALLBACK)
  throw new Error('invalid callback : ' + process.env.JENKING_CALLBACK);

var bomb = new TimeBomb({
  bomb: function() {
    console.log('bomb at ' + new Date().toISOString());
    console.log(CALLBACK);
    request(CALLBACK);
    bomb.start();
  },
  timeout: TIMEOUT
});
var app = express();

app.get('/', function(req, res) {
  var message = 'reset at ' + new Date().toISOString();
  console.log(message);
  bomb.reset();
  res.json({ message: message });
});

app.get('/ping', function(req, res) {
  console.log('ping');
  res.json({ message: 'pong' });
});

app.listen(PORT, function() {
  console.log('listening : ' + PORT);
  console.log('start at ' + new Date().toISOString());
  bomb.start();
});

module.exports = app;
