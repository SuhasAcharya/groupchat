//Make connection
var socket = io.connect('https://suhaschat.herokuapp.com/');

//Query DOM
var user = document.getElementById('user');
var message = document.getElementById('message');  
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

//Emit Events
btn.addEventListener('click',function(){
    socket.emit('chat',{
        user:user.value,
        message:message.value
    });
    message.value = '';
});

message.addEventListener('keypress',function(){
    socket.emit('typing',user.value);
});

//Listen for Events
socket.on('chat',function(data){
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.user + ':</strong>' + data.message + '</p>';
});

socket.on('typing',function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing...</em></p>';
});

 