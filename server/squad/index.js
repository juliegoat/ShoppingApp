const { SquadSession } = require('./squad-session')

const availableRooms = {}

const squadEvent = {
    NOTIFICATION: 'squad:notification',
    SESSION_STATE: 'squad:session-state',
    ADD_ITEM_SHOPPING_LIST: 'squad:add-item-shopping-list',
    REMOVE_ITEM_SHOPPING_LIST: 'squad:remove-item-shopping-list'
}
Object.freeze(squadEvent)

const registerSocketToRoom = (io, socket, roomId) => {
    let room
    if (availableRooms[roomId]) {
        room = availableRooms[roomId]
    }
    else {
        room = availableRooms[roomId] = new SquadSession(roomId)
    }

    if (Object.keys(socket.rooms).indexOf(room) == -1) {

        socket.join(roomId)

        io.to(roomId).emit(squadEvent.NOTIFICATION, 'Someone has joined the room')

        socket.emit(squadEvent.NOTIFICATION, `You have joined ${roomId}`)
        socket.emit(squadEvent.SESSION_STATE, room.sessionStateMsg)

        socket.on('test', (msg) => console.log(`Test message ${msg}`))

        socket.on(squadEvent.ADD_ITEM_SHOPPING_LIST, (msg) => {
            console.log('Recieved add item event')
            room.shoppingList.addItem(JSON.parse(msg))
            socket.emit(squadEvent.SESSION_STATE, room.sessionStateMsg)
        })

        socket.on(squadEvent.REMOVE_ITEM_SHOPPING_LIST, (msg) => {
            console.log('Recieved remove item event')
            room.shoppingList.removeItem(JSON.parse(msg).id)
            socket.emit(squadEvent.SESSION_STATE, room.sessionStateMsg)
        })
    }
}

module.exports = { squadEvent, registerSocketToRoom }
