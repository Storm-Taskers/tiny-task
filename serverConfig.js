const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes.js');


const app = express();

app.use('/', router);

app.use(bodyParser.json());


//app.use(express.static('./'));




module.exports = app;