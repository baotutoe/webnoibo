let Product = require('../models/product.model');

const socket = (server) => {
    console.log("Starting socket server...");
    let io = require('socket.io')(server);

    console.log("Socket server is running");

    io.on("connection", function (socket) {

        console.log("connection rooms: " + socket.rooms);
        var clientIp = socket.request.connection.remoteAddress;
        console.log('New connection from ' + clientIp + ' with id: ' + socket.id);

        io.on('create_room', function (socket) {
            console.log("message" + socket.rooms);
        })

        socket.on("disconnect", function () {
            console.log(socket.id + ' disconnected');
        })
    });
}

module.exports = socket;