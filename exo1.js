const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TODO:
// https://expressjs.com/fr/guide/routing.html
app.listen(port, () => {
    console.log(`-------------- Server is running at http://localhost:${port} --------------`);
});

// TODO:
// 1. create a GET /userInfo which takes "id" as parameter and returns { name: "Pierre" } 
// if this "id" is 10
// 2. example: curl localhost:3000/userInfo?id=10
app.get('/userInfo', (req, res) => {
    // HINTS: req.query
    if (+req.query.id === 10) {
        req.query.name = 'Pierre';
        res.send(req.query);
    } else {
        res.status(500).send("User Not Found"); // https://expressjs.com/fr/guide/error-handling.html 
    }
});

app.post('/userInfo', function(req, res) {
    res.send('Got a POST request');
});

app.put('/userInfo', function(req, res) {
    res.send('Got a PUT request');
});

app.delete('/userInfo', function(req, res) {
    res.send('Got a DELETE request');
});