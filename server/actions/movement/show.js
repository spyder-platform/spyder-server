var path = require('path');

module.exports = function (app) {
	return function (req, res, next) {
		app.models.Movement.findOne({
			_id: req.params.id
		}).then(function(movement) {
			res.sendFile(path.resolve('storage') + '/' + movement.path);
		})
	}
};