
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const path = require('path');
require("dotenv").config();

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users.js');

const PORT = process.env.PORT || 5000;


const router = require('./router');
const bd = require('./bd');
const movieRouter = require('./routes/movie-router');
const citaRouter = require('./routes/cita-router');
const userRouter = require('./routes/user-router');
const asignacionRouter = require('./routes/asignacion-router');


const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

bd.on('error', console.error.bind(console, 'MongoDB connection error:'));


const server = http.createServer(app);
const io = socketio(server, {
    cors:{
        origin:"*",
    },
});


io.on('connection', (socket) => {
    socket.on('join', ({name, room}, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });

        if(error) return callback(error);

        

        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}` });
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined!` });

        socket.join(user.room);

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)})

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', {user: user.name, text: message});
        io.to(user.room).emit('roomData', {user: user.room, users: getUsersInRoom(user.room)});

        callback();
    });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if(user){
            io.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left.`})
        };

  
    })
});

app.use(router);
app.use('/api', movieRouter);
app.use('/api', citaRouter);
app.use('/api', userRouter);
app.use('/api', asignacionRouter);


app.use("/users", require("./routes/users"));





server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));