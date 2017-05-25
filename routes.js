const router = require('express').Router();
const handler = require('./util/requestHandler.js');

router.get('/', (req, res) => {
  console.log('it works');
  res.status(200).send('hello world');
});


module.exports = router;