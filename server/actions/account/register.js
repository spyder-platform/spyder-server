module.exports = function(app){
	return function(req, res, next){
		var user = new app.models.User({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email,
			password: req.body.password
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