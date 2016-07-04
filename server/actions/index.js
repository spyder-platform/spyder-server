module.exports = function (app) {
	app.actions = {};
	app.actions.account = require('./account')(app);
	app.actions.movement = require('./movement')(app);
};