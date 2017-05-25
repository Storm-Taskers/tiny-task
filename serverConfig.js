const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes.js');


const app = express();

app.use('/', router);

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('access-control-allow-headers', 'Content-Type, accept, X-Requested-With');
  return next();
});

//app.use(express.static('./'));




module.exports = app;