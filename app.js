var express = require('express');
var http = require('http');
var path = require('path');

var app = express();
app.set('port', 3000)

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

app.use(function( req, res, next ) {
	if (req.url == '/') {
		res.end("hello");
	} else {
		next();
	}
});

app.use(function( req, res, next ) {
	if (req.url == '/test') {
		res.end("test");
	} else {
		next();
	}
});

app.use(function( req, res, next ) {
	if (req.url == '/forbidden') {
		next(new Error('wops, denide'));
	} else {
		next();
	}
});

app.use(function( req, res ) {
	res.send(404, 'Page not found')
});

app.use(function( err, req, res, next ) {
	if (app.get('env') == 'development') {
		var errorHandler = express.errorHandler();
		errorHandler( err, req, res, next );
	} else {
		res.send(500);
	}
});

// var routes = require('./routes');
// var user = require('./routes/user');

// // all environments
// app.set('port', process.env.PORT || 3000);
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
// app.use(express.favicon());
// app.use(express.logger('dev'));
// app.use(express.bodyParser());
// app.use(express.methodOverride());
// app.use(express.cookieParser('your secret here'));
// app.use(express.session());
// app.use(app.router);
// app.use(express.static(path.join(__dirname, 'public')));

// // development only
// if ('development' == app.get('env')) {
//   app.use(express.errorHandler());
// }

// app.get('/', routes.index);
// app.get('/users', user.list);


