module.exports = function(app){
	return function(req, res, next){
		app.models.Token.findOne({
			_id: req.query.token
		}).then(function(token) {
			app.models.Movement.create({
				path: req.file.filename,
				user: token.user
			}).then(function(event) {
				res.send({
					success: true,
					data: event,
					message: "Photo téléchargée avec succès !"
				});
			});
		});
	}
};