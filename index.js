var express = require('express');
var socket = require('socket.io');

//App Setup
var port = process.env.PORT || 5000;
var app = express();
var server = app.listen(port,function(){
    console.log('listing to port 5000');
});

//Static Files

app.use(express.static('public'));

//Socket setup
var io = socket(server);

io.on('connection',function(socket){
    console.log('connection was successful');

    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
    });

    socket.on('typing',function(data){
    socket.broadcast.emit('typing', data);   
    });
});