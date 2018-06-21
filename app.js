var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var path = require('path');
var http = require('http').Server(app);

//Admin Routes
var login = require('./routes/admin/Login.js');
var dashboard = require('./routes/admin/Index.js');
var addService = require('./routes/admin/service/Add.js');
var viewService = require('./routes/admin/service/View.js');
var addComponent = require('./routes/admin/component/Add.js');
var viewComponent = require('./routes/admin/component/View.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(session({
	secret: 'asdfghjklasdfghjkl',
	resave: false,
	saveUninitialized: true
}));

//GET Routes
app.use('/admin/login', login);
app.use('/admin/dashboard', dashboard);
app.use('/admin/service/add', addService);
app.use('/admin/service/view', viewService);
app.use('/admin/component/add', addComponent);
app.use('/admin/component/view', viewComponent);

http.listen(3000, function() {
	console.log('Starting at server 3000');
});
