const session = require("express-session");
const passport = require("passport");
const socket = require('./socket');
const app = socket.app;
const port = socket.port;
const io = socket.io;
const server = socket.server


// auth / route stuff
const bodyParser = require("body-parser");

// solution for the cors error in fetch request
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Passport Auth
const routes = require("./server/routes");
app.use(
    session({
        secret: "keyboard cat",
        resave: true,
        saveUninitialized: true
    })
);

require("./server/config/passport-strat.js");
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);
app.set("models", require("./server/models"));


//  handle a connection of a client, so that you can publish (emit) events to that client.
io.on('connection', (client) => {
    client.on('subscribeToTimer', (interval) => {
        console.log('client is subscribing to timer with interval ', interval);
    });
});

module.exports = {io};


server.listen(port, () => console.log(`Listening on port ${port}`));