var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var addTodo = require('../api/addTodo')
router.post('/adduser', addUser.addUser)

var addUser = require('../api/addUser')
router.post('/addUser', addUser.addUser)
module.exports = router;
