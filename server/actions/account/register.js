var sha1 = require('sha1');

module.exports = function(app){
	return function(req, res, next){
		var user = new app.models.User({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email,
			device: req.body.device,
			password: sha1(req.body.password)
		});

		user.save().then(function(user) {
			res.send({
				success: true,
				data: user,
				message: 'Inscription réussie.'
			})
		})
	};
};