module.exports = function(app){
	app.use('/api/account', require('./account')(app));
};