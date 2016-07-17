var gcm = require('node-gcm');

module.exports = function(app){
	var sender = new gcm.Sender(app.settings.gcmApiKey);
	var message = new gcm.Message({
		collapseKey: 'new_movement',
		priority: 'high',
		contentAvailable: true,
		delayWhileIdle: true,
		data: {},
		notification: {
			title: "Nouveau mouvement !",
			icon: "ic_group_work_black_24dp",
			body: "Un nouveau mouvement est survenu."
		}
	});

	return function(req, res, next){
		app.models.Token.findOne({
			_id: req.query.token
		}).then(function(token) {
			app.models.Movement.create({
				path: req.file.filename,
				user: token.user
			}).then(function(movement) {
				res.send({
					success: true,
					data: movement,
					message: "Photo téléchargée avec succès !"
				});

				// Envoi de la notification push
				app.models.User.findOne({
					_id: token.user
				}).then(function(user) {
					var devices = [user.device];
					message.addData(movement);

					sender.send(message, { registrationTokens: devices }, function (err, response) {
						err ? console.error(err) : console.log(response);
					});
				})
			});
		});
	}
};