import io from 'socket.io-client';

const socket = (roomId) => {
    const socket = io(`http://localhost:3000/party?room=${roomId}`, { "transports": ["websocket"] });

    socket.emit('chat message', `Hello there! ${roomId}`)
};

export default socket;