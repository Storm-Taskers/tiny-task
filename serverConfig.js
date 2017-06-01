const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes.js');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

module.exports = app;