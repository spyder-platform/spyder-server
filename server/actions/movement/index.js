module.exports = function (app) {
	return {
		list: require('./list')(app),
		show: require('./show')(app),
		create: require('./create')(app)
	}
};