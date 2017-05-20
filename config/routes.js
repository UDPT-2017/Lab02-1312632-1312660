var Router = require('express').Router;
var controllers = require('../app/controllers');

module.exports = function(app, passport){
	var homeRoutes = Router()
		.get('/', controllers.home.index);

	var messageRoutes = Router()
		.get('/', controllers.messages.index)
		.post('/', controllers.messages.select);

	var aboutRoutes = Router()
		.get('/', controllers.about.index);

	var userRoutes = Router()
		.get('/', controllers.user.index)
		.post('/', controllers.messages.select);

	var registerRoutes = Router()
		.get('/', controllers.register.index)
		.post('/', controllers.register.create);

	app.use('/', homeRoutes);
	app.use('/message', messageRoutes);
	app.use('/about', aboutRoutes);
	app.use('/user', userRoutes);
	app.use('/register', registerRoutes);
};
