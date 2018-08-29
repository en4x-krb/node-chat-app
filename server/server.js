const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

var app = express();
var server = http.createServer(app);

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var io = socketIO(server);

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

app.use(express.static(publicPath));

server.listen(port, () => {console.log(`Listening on port ${port}`)});