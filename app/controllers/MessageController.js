var Login = require('../models/Login');

var messageController = {
	index: function(req, res){
			res.render('messages/index', {
				title: 'Messages'
		});
	},
	select: function(req, res) {
    	Login.select({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      phone: req.body.phone,
    }, function(err){
      if(err){
        res.render('messages/index', {
          title: 'Login',
          detailMessage: {
            error: 'Login failed'
          }
        });
      } else {
        res.render('messages/index', {
          title: 'Login',
          detailMessage:{
            success: 'Login successfully.'
          }
        });
      }
    });
	}
}

module.exports = messageController;