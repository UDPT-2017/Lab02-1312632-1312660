var Register = require('../models/Register');

var registerController = {
	index: function(req, res){
			res.render('register/index', {
				title: 'Register'
		});
	},
	create: function(req, res) {

		Register.create({
			email: req.body.email,
			password: req.body.password,
			name: req.body.name,
			phone: req.body.phone,
		}, function(err){
			if(err){
				res.render('register/index', {
					title: 'Register',
					detailMessage: {
						error: 'Register failed'
					}
				});
			} else {
				res.render('register/index', {
					title: 'Register',
					detailMessage:{
						success: 'Register successfully.'
					}
				});
			}
		});
	}
};
module.exports = registerController;