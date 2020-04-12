const express = require('express')
const http = require('http')
const socketIO = require('socket.io')

const app = express()
const server = http.createServer(app)

const socketIOConfig = {
    'serveClient': true,
    'transports': ['websocket']
}
const io = socketIO(server, socketIOConfig).of("/party")
const port = 3000

const { registerSocketToRoom } = require("./squad")


// Test socket.io connection
io.on('connection', (socket) => {
    const roomId = socket.handshake.query.room
    registerSocketToRoom(io, socket, roomId)
})

// app.get('/', (_, res) => res.sendFile(`${__dirname}/index.html`))

// Start HTTP Server listening to `port`
server.listen(port, () => console.log(`Starting HTTP server on port ${port}`))
