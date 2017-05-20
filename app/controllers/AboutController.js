var aboutController = {
	index: function(req, res){
			res.render('about/index', {
				title: 'About'
		});
	}
};

module.exports = aboutController;