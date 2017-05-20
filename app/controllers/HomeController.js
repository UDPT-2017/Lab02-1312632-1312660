var homeController = {
	index: function(req, res){
		  	res.render('home/index', { 
	  			title: 'Chào mừng bạn đến với trình quản lý messages', 
	  			message: 'Trang chủ'
  		});
	}
};

module.exports = homeController;