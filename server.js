const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// auth / route stuff
const bodyParser = require("body-parser");
const routes = require("./server/routes");
app.set("models", require("./server/models"));
app.use(routes);
app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));