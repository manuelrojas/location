var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

io.on('connection', function(socket){
  console.log('Un pato se unio!', socket.id);
  socket.on('cuak', function(location){
    const _location = JSON.parse(location)
    console.log(
      'PATO:', 
      `Latitude: ${_location.coords.longitude} - Longitud: ${_location.coords.longitude}`
    );
  });
});

http.listen(port, function(){
  console.log('listening on *:3000');
});
    