const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const app = express()
const server = http.createServer(app)

const socketIOConfig = {
    // 'path': '/test',
    'serveClient': false,
    'transports': ['websocket']
}
const io = socketIO(server, socketIOConfig).of("/party")

const port = 3000

// Test socket.io connection
io.on('connection', (socket) => {
    const room = socket.handshake.query.room
    socket.join(room)
    socket.on(
        'chat message',
        (msg) => {
            console.log(msg)
            io.to(room).emit('chat message', msg)
        }
    )
})

// Start HTTP Server listening to `port`
server.listen(port, () => console.log(`Starting HTTP server on port ${port}`))
