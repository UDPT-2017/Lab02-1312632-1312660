var userController = {
	index: function(req, res){
			res.render('user/index', {
				title: 'User'
		});
	}
};

module.exports = userController;