module.exports = function (app) {
	return function (req, res, next) {
		app.models.Token.findOne({
			_id: req.query.token
		}, function (err, instance) {
			if (!instance) {
				return res.status(401).send({
					success: false,
					message: 'Vous devez être authentifié pour effectuer cette action.'
				});
			}

			next();
		})
	}
};
