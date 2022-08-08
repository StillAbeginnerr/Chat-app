const io = require('socket.io')(3000)

io.on('connnection' , socket =>{
  socket.emit('chat-message','Hello-World');
})