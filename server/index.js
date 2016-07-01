require('./global');
var express = require('express');
var api = express();

(function init() {
	require('./settings')(api);
	require('./models')(api);
	require('./middlewares')(api);
	require('./actions')(api);
	require('./routes')(api);
}());

(function start() {
	api.listen(api.settings.port, api.settings.ip);
	console.log('Server listening at :ip::port'.replace(':ip', api.settings.ip).replace(':port', api.settings.port));
}());