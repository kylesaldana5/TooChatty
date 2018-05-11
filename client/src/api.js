"use strict"
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:5000');

//  node style function, where the caller of this function can pass in an interval for the timer on the first parameter,
//  and a callback function on the second parameter.
function subscribeToTimer(cb) {
    socket.on('timer', timestamp => cb(null, timestamp));
    socket.emit('subscribeToTimer', 1000);
}

export { subscribeToTimer }