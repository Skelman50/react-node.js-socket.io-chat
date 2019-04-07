const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');
const users = require('./users')();

const app = express();
const server = http.createServer(app);
const io = socketIO(server);


const PORT = process.env.PORT || 4040;

const newMessage = (userID, name, message, messageID) => ({
  userID, name, message, messageID,
});


io.on('connection', (socket) => {
  socket.on('createNewMessage', (data) => {
    const user = users.get(socket.id);
    const { message, name } = data;
    io.to(user.room).emit('newMessage', newMessage(socket.id, name, message, socket.id));
  });

  socket.on('join', (user, callback) => {
    callback({ userID: socket.id });

    socket.join(user.room);
    users.add(socket.id, user.name, user.room);

    io.to(user.room).emit('usersUpdate', users.getByRoom(user.room));

    const message = `Welcome, ${user.name}!`;
    socket.emit('newMessage', newMessage(socket.id, 'Admin', message, ''));

    const messageNewUser = `${user.name} joined.`;
    socket.broadcast.to(user.room).emit('newMessage', newMessage('', 'Admin', messageNewUser, ''));
  });

  socket.on('disconnect', () => {
    const user = users.remove(socket.id);
    const shoe = users.users.findIndex(user => user.id === socket.id);
    if (user) {
      const message = `${user.name} left`;
      io.to(user.room).emit('newMessage', newMessage('', 'Admin', message, ''));
    }
    if (shoe !== -1) {
      users.users.splice(shoe, 1);
      io.to(user.room).emit('usersUpdate', users.users);
    }
  });
});


  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(
        __dirname, '../client', 'build', 'index.html',
      ),
    );
  });


server.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
