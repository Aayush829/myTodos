var express = require('express');
var router = express.Router();

var auth = function (req, res, next) {
	if (req.session.email && req.session.isLogged) {
		return next();
		// req.session.destroy();
	}	
	else
		return res.json({ status: 'FAILED', message: 'Please login.' });
};
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

var deleteTodo = require('../api/deleteTodo')
router.post('/deleteTodo', deleteTodo.deleteTodo)

var listTodo = require('../api/listTodo')
router.post('/listTodo', listTodo.listTodo)

var logout = require('../api/logout')
router.post('/logout', logout.logout)

module.exports = router;
