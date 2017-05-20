var db = require('./database')

var Login = {
	select: function(login, password, callback, req, res){
		db.query('select email, password from "users" where email = $1',
		[login.email],
		function(err, result) {
			var row = result.rows.length;
        if(row === 0) {
        	callback("Email not found !");
      	}else {
        	var passwordDB = result.rows[0].password;
        	if(passwordDB !== login.password) {
          		callback("Password Incorrect!");
        	}else {
          		callback("Login successfully.", result.rows[0]);
        	}
      	}
		});
	}
};

module.exports = Login;