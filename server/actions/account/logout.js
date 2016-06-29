module.exports = function (app) {
	return function (req, res, next) {
		delete req.session.userId;

		res.send({
			success: true,
			data: null,
			message: "Déconnexion réussie."
		});
	};
};