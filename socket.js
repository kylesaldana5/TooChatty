const express = require('express');
const app = express();
const server = require('http').createServer(app)
const port = process.env.PORT || 5000;
const io = require('socket.io')(server);

module.exports = { io, app, port, server }