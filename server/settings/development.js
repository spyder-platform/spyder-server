module.exports = {
	port      : 8080,
	db        : 'mongodb://localhost:27017/event-api',
	sessionDb : 'mongodb://localhost:27017/event-session-db',
	sessionTTL: 2 * 24 * 60 * 60
};