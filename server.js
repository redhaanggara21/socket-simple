var express = require('express'),
    app = express(),
    http = require('http'),
    socketIO = require('socket.io'),
    server, io;

console.log("listening on *:3000");
console.log("  a user connected");


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

server = http.Server(app);
server.listen(5000);
io = socketIO(server);
io.on('connection', function (socket) {
  socket.emit('greeting-from-server', {
      name: 'Budi Sanjaya'
  });
  socket.on('greeting-from-client', function (message) {
    // console.log(message);
    console.log("Incoming event [ping] >>> " + JSON.stringify(message));
    console.log("Outgoing event [pong] >>> " + JSON.stringify(message));
  });
});