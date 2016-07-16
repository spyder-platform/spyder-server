var path = require('path');
var fs = require('fs');

module.exports = function(app){
	return function(req, res, next){
		app.models.Movement.findOne({
			_id: req.params.id
		}).then(function(movement) {
			fs.unlink(path.resolve('storage') + '/' + movement.path, function(err) {
				if(err) {
					return res.status(500).send({
						success: false,
						message: 'Une erreur est survenue à la suppréssion du fichier'
					})
				}

				app.models.Movement.remove({
					_id: req.params.id
				}).then(function() {
					res.send({
						success: true,
						message: "La photo a été supprimée avec succès."
					})
				})
			})
		});
	}
};