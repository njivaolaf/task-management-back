const express = require('express');
const bodyParser = require('body-parser');
const userInfoRoute = require('./routes/userInfo-route');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/userInfo', userInfoRoute);


app.listen(port, () => {
    console.log(`-------------- Server is running at http://localhost:${port} --------------`);
});