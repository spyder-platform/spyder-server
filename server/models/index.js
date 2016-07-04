var mongoose = require('mongoose');

module.exports = function (app) {
	app.mongoose = mongoose.connect(app.settings.db);

	app.models = {};
	app.models.User = require('./User')(app);
	app.models.Token = require('./Token')(app);
	app.models.Movement = require('./Movement')(app);
};