var sha1 = require('sha1');

module.exports = function (app) {
	return function (req, res, next) {
		app.models.User.findOne({
			email: req.body.email,
			password: sha1(req.body.password)
		}).then(function (instance) {
			if (!instance) {
				return res.status(404).send({
					success: false,
					data: null,
					message: 'Ce compte est introuvable.'
				});
			}

			app.models.Token.create({
				user: instance._id
			}).then(function(token) {
				res.send({
					success: true,
					data: token,
					message: 'Connexion réussie.'
				});
			});
		})
	};
};