var express = require('express');
var router = express.Router();

router.get('/home', auth, function (req, res, next) {
  if (req.session.isLogged) {
  res.render('home', { title: req.session.email })
  }
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signin', function  (req, res, next) {
  res.render('signin');
});

router.get('/signup', function (req, res,  next) {
  res.render('signup');
})

module.exports = router;
