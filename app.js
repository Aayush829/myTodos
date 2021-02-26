var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var session = require('express-session');
var jwt = require('jsonwebtoken');
// var bcrypt = require('bcryptjs');

const createToken = async() =>  {
    const token = await jwt.sign({_id:"60256a6783908400153acb5c"},"12345678123456781234567812345678",{
      expiresIn:"10 seconds"
    });
    console.log(token);

    const userVerify = await jwt.verify(token, "12345678123456781234567812345678");
    console.log(userVerify);
}

createToken();




// const securePassword = async(password) => {
//    const passwordHash = await bcrypt.hash(password, 10);
//    console.log(passwordHash);

//    const passwordmatch = await bcrypt.compare(password, passwordHash);
//    console.log(passwordmatch);
// }

// securePassword("aayu829");

var view = require('./routes/view');
var api = require('./routes/api');
const { create } = require('hbs');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// app.use(session({
// 	// Here we are creating a unique session identifier
// 	secret: 'secret1234',
// 	resave: true,
// 	saveUninitialized: true
// }));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', view);
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(3000);

module.exports = app;
