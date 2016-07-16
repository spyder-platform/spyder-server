var path = require('path');

module.exports = function (app) {
	return function (req, res, next) {
		app.models.Movement.findOne({
			_id: req.params.id
		}).then(function(movement) {
			if(!movement) {
				return res.status(404).send({
					success: false,
					data: null,
					message: 'Cette photo est introuvable.'
				});
			}

			res.sendFile(path.resolve('storage') + '/' + movement.path);
		})
	}
};