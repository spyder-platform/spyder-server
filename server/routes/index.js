module.exports = function(app){
	app.use('/api/account', require('./account')(app));
	app.use('/api/movement', require('./movement')(app));
};