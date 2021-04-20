var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const baseURL = 'https://jsonplaceholder.typicode.com/users';

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
