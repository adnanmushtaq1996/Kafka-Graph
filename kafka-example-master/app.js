var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser')
var io = require('socket.io').listen(app.listen(3000));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

io.sockets.on('connection', function (socket) {
  console.log('client connect');
  socket.on('echo', function (data) {
    io.sockets.emit('message', data);
  });
});

require('./api')(app, io);

console.log("Server listening at port 3000");