var db = require('./database')

var Register = {
	create: function(register, callback) {
		db.query('insert into users(email, password, name, phone) values($1, $2, $3, $4)',
			[register.email, register.password, register.name, register.phone],
			function(err, result){
				callback(err);
			});
	}
};
module.exports = Register;