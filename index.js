var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var session = require('express-session');
var multer = require('multer');
var routes = require('./app/routers/routes');
var app = express();




app.engine('html', require('hbs').__express);
app.set('view engine', 'html');
app.set('views', process.cwd() + '/app/views');

app.use(express.static(__dirname + '/public'));



// app.get('/', function(req, res) {
// 	res.render('site_angular', {});
// });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
	extended: false
}))

// parse application/json
app.use(bodyParser.json());

// 
app.use('/', routes);

// 
app.listen(3030, function(){
	console.log('Example app listening on port 3030!');
});