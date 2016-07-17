var gcm = require('node-gcm');

var sender = new gcm.Sender('AIzaSyCWJvHft-oVhjx0MGwL-ZJBNuwWnrGRKQM');
var message = new gcm.Message({
	collapseKey: 'demo',
	priority: 'high',
	contentAvailable: true,
	delayWhileIdle: true,
	timeToLive: 3,
	dryRun: true,
	data: {},
	notification: {
		title: "Nouveau mouvement !",
		icon: "ic_group_work_black_24dp",
		body: "Un nouveau mouvement est survenu."
	}
});

module.exports = function(app){
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