module.exports = function (app) {
	return function (req, res, next) {
		app.models.Token.findOne({
			_id: req.query.token
		}, {path: 0}).then(function(token) {
			app.models.Movement.find({
				user: token.user
			}).then(function(movements) {
				res.send({
					success: true,
					data: movements
				})
			})
		})
	}
};