import io from 'socket.io-client';


const socket = io('http://localhost:1337', {
  transports: ['websocket', 'polling'],
  reconnection: false
});

export default socket;
