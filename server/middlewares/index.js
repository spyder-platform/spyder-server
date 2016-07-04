module.exports = function (app) {
	app.middlewares = {};
	app.middlewares.authenticated = require('./authenticated')(app);
};