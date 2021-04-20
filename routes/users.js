var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

const baseURL = 'https://jsonplaceholder.typicode.com/users';

/* GET users listing. */
router.get('/', (req, res, next) => {
  const url = baseURL;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      res.send({ data })
    })
    .catch(err => {
      res.send(err)
    })
});

router.get('/:id', (req, res) => {
  const userId = req.params.id || '';
  const url = `${baseURL}/${userId}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      res.send({ data })
    })
    .catch((err) => res.send(err))
})

module.exports = router;
