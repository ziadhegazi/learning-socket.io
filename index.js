const express = require("express");
const socket = require("socket.io");

const app = express();
const server = app.listen(8000, () => {
    console.log("Server started on port 8000");
});

// static files
app.use(express.static("Public"));

// socket setup
const io = socket(server);

io.on("connection", (socket) => {
    console.log("Connection made");

    socket.on("chat", (data) => {
        io.sockets.emit("chat", data);
    });
});
