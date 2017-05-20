var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');
var bodyParser = require('body-parser');

module.exports = function(app){
	app.use(bodyParser.urlencoded({
		extended: true,
	}));
	app.engine('hbs', exphbs({
		extname: '.hbs', 
		defaultLayout: 'application',
		layoutsDir: path.resolve('app/views/layouts')
	}));
	app.set('view engine', 'hbs');
	app.set('views', path.resolve('app/views/'));
};