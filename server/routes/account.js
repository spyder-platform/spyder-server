var router = require('express').Router();
var bodyparser = require('body-parser').json();

module.exports = function (app) {
	router.post('/login',
		bodyparser,
		app.actions.account.login
	);

	router.post('/logout',
		app.actions.account.logout
	);

	router.post('/register',
		bodyparser,
		app.actions.account.register
	);

	return router;
};