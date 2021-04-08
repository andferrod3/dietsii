
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
const fichaRouter = require('./routes/ficha-router');
const registronRouter = require('./routes/registron-router');

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

        

        socket.emit('message', { user: 'admin', text: `${user.name}, bienvenido a la sesión ${user.room}` });
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, se ha unido a la sesión.` });

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

    socket.on('addRegistron', (registron) => {
    
            socket.broadcast.emit('addRegistron', registron);
       
    });

    socket.on('write2', (evt) => {
       
        socket.broadcast.emit('write2', evt);
       
   
    })

    socket.on('write', (evt) => {
       
        socket.broadcast.emit('write', evt);
       
   
    })

    socket.on('text', (pack) => {
        io.sockets.emit('text', pack);
        lastText = pack.data;
        var uid = uids.get(socket.id);
        console.log("New text event by " + socket.id + "(" + uid + ") in room <" + pack.rid + ">:" + toJSON(pack));
    });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if(user){
            io.to(user.room).emit('message', {user: 'admin', text: `${user.name} ha abandonado la sesión.`})
        };

  
    })
});

app.use(router);
app.use('/api', movieRouter);
app.use('/api', citaRouter);
app.use('/api', userRouter);
app.use('/api', asignacionRouter);
app.use('/api', fichaRouter);
app.use('/api', registronRouter);

app.use("/users", require("./routes/users"));





server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));