
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
const menuRouter = require('./routes/menu-router');
const registroeRouter = require('./routes/registroe-router');
const entrenoRouter = require('./routes/entreno-router');

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

    socket.on('addRegistroe', (registroe) => {
    
        socket.broadcast.emit('addRegistroe', registroe);
   
});

    socket.on('write2', (evt) => { socket.broadcast.emit('write2', evt); })

    socket.on('write', (evt) => {
       
        socket.broadcast.emit('write', evt);
       
   
    })

    socket.on('write3', (evt) => { socket.broadcast.emit('write3', evt); })
    socket.on('write4', (evt) => { socket.broadcast.emit('write4', evt); })
    socket.on('write5', (evt) => { socket.broadcast.emit('write5', evt); })
    socket.on('write6', (evt) => { socket.broadcast.emit('write6', evt); })
    socket.on('write7', (evt) => { socket.broadcast.emit('write7', evt); })
    socket.on('write8', (evt) => { socket.broadcast.emit('write8', evt); })
    socket.on('write9', (evt) => { socket.broadcast.emit('write9', evt); })
    socket.on('write10', (evt) => { socket.broadcast.emit('write10', evt); })
    socket.on('write11', (evt) => { socket.broadcast.emit('write11', evt); })
    socket.on('write12', (evt) => { socket.broadcast.emit('write12', evt); })
    socket.on('write13', (evt) => { socket.broadcast.emit('write13', evt); })
    socket.on('write14', (evt) => { socket.broadcast.emit('write14', evt); })
    socket.on('write15', (evt) => { socket.broadcast.emit('write15', evt); })
    socket.on('write16', (evt) => { socket.broadcast.emit('write16', evt); })
    socket.on('write17', (evt) => { socket.broadcast.emit('write17', evt); })
    socket.on('write18', (evt) => { socket.broadcast.emit('write18', evt); })
    socket.on('write19', (evt) => { socket.broadcast.emit('write19', evt); })
    socket.on('write20', (evt) => { socket.broadcast.emit('write20', evt); })
    socket.on('write21', (evt) => { socket.broadcast.emit('write21', evt); })
    socket.on('write22', (evt) => { socket.broadcast.emit('write22', evt); })
    socket.on('write23', (evt) => { socket.broadcast.emit('write23', evt); })
    socket.on('write24', (evt) => { socket.broadcast.emit('write24', evt); })
    socket.on('write25', (evt) => { socket.broadcast.emit('write25', evt); })
    socket.on('write26', (evt) => { socket.broadcast.emit('write26', evt); })
    socket.on('write27', (evt) => { socket.broadcast.emit('write27', evt); })
    socket.on('write28', (evt) => { socket.broadcast.emit('write28', evt); })
    socket.on('write29', (evt) => { socket.broadcast.emit('write29', evt); })
    socket.on('write30', (evt) => { socket.broadcast.emit('write30', evt); })
    socket.on('write31', (evt) => { socket.broadcast.emit('write31', evt); })
    socket.on('write32', (evt) => { socket.broadcast.emit('write32', evt); })
    socket.on('write33', (evt) => { socket.broadcast.emit('write33', evt); })
    socket.on('write34', (evt) => { socket.broadcast.emit('write34', evt); })
    socket.on('write35', (evt) => { socket.broadcast.emit('write35', evt); })
    socket.on('write36', (evt) => { socket.broadcast.emit('write36', evt); })
    socket.on('write37', (evt) => { socket.broadcast.emit('write37', evt); })
    socket.on('write38', (evt) => { socket.broadcast.emit('write38', evt); })
    socket.on('write39', (evt) => { socket.broadcast.emit('write39', evt); })
    socket.on('write40', (evt) => { socket.broadcast.emit('write40', evt); })
    socket.on('writeCal', (evt) => { socket.broadcast.emit('writeCal', evt); })
    socket.on('writeHidr', (evt) => { socket.broadcast.emit('writeHidr', evt); })
    socket.on('writeProt', (evt) => { socket.broadcast.emit('writeProt', evt); })
    socket.on('writeGras', (evt) => { socket.broadcast.emit('writeGras', evt); })
    socket.on('writeCal0', (evt) => { socket.broadcast.emit('writeCal0', evt); })
    socket.on('write01', (evt) => { socket.broadcast.emit('write01', evt); })
    socket.on('write02', (evt) => { socket.broadcast.emit('write02', evt); })
    socket.on('write03', (evt) => { socket.broadcast.emit('write03', evt); })
    socket.on('write04', (evt) => { socket.broadcast.emit('write04', evt); })
    socket.on('write05', (evt) => { socket.broadcast.emit('write05', evt); })
    socket.on('write06', (evt) => { socket.broadcast.emit('write06', evt); })
    socket.on('write07', (evt) => { socket.broadcast.emit('write07', evt); })
    socket.on('write08', (evt) => { socket.broadcast.emit('write08', evt); })
    socket.on('write09', (evt) => { socket.broadcast.emit('write09', evt); })
    socket.on('write010', (evt) => { socket.broadcast.emit('write010', evt); })
    socket.on('write011', (evt) => { socket.broadcast.emit('write011', evt); })
    socket.on('write012', (evt) => { socket.broadcast.emit('write012', evt); })
   
    socket.on('clicked', function(data) {
        io.emit('buttonUpdate', data);
  });
  socket.on('clicked2', function(data) {
    io.emit('buttonUpdate2', data);
});
socket.on('clicked3', function(data) {
    io.emit('buttonUpdate3', data);
});
socket.on('clicked4', function(data) {
    io.emit('buttonUpdate4', data);
});
socket.on('clicked5', function(data) {
    io.emit('buttonUpdate5', data);
});
socket.on('clicked6', function(data) {
    io.emit('buttonUpdate6', data);
});
socket.on('clicked7', function(data) {
    io.emit('buttonUpdate7', data);
});

socket.on('clicked01', function(data) {
    io.emit('buttonUpdate01', data);
});
socket.on('clicked02', function(data) {
io.emit('buttonUpdate02', data);
});
socket.on('clicked03', function(data) {
io.emit('buttonUpdate03', data);
});
socket.on('clicked04', function(data) {
io.emit('buttonUpdate04', data);
});
socket.on('clicked05', function(data) {
io.emit('buttonUpdate05', data);
});
socket.on('clicked06', function(data) {
io.emit('buttonUpdate06', data);
});
socket.on('clicked07', function(data) {
io.emit('buttonUpdate07', data);
});

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
app.use('/api', menuRouter);
app.use('/api', registroeRouter);
app.use('/api', entrenoRouter);

app.use("/users", require("./routes/users"));





server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));