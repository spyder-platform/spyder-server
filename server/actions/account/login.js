module.exports = function (app) {
	return function (req, res, next) {
		app.models.User.findOne({
			email   : req.body.email,
			password: req.body.password
		}).then(function (instance) {
			if (!instance) {
				return res.status(404).send({
					success: false,
					data   : null,
					message: 'Ce compte est introuvable.'
				});
			}

			req.session.userId = instance.id;
			res.send({
				success: true,
				data   : instance,
				message: 'Connexion réussie.'
			});
		})
	};
};