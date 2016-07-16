module.exports = function (app) {
	return function (req, res, next) {
		app.models.Token.remove({
			_id: req.query.token
		}, function(err) {
			if(err) {
				return res.status(500).send({
					success: false,
					message: 'Une erreur est survenue.'
				});
			}

			res.send({
				success: true,
				message: "Déconnexion réussie."
			});
		});
	};
};