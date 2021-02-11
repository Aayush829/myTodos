var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

var addTodo = require('../api/addTodo')
router.post('/addTodo', addTodo.addTodo)

var addUser = require('../api/addUser')
router.post('/addUser', addUser.addUser)

var authenticate = require('../api/authenticate')
router.post('/authenticate', authenticate.authenticate)

var checkTodo = require('../api/checkTodo')
router.post('/checkTodo', checkTodo.checkTodo)
module.exports = router;
