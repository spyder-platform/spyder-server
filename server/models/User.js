module.exports = function (app) {
	var UserSchema = app.mongoose.Schema({
		firstname: {
			type: String,
			required: true
		},
		lastname: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		password: {
			type: String,
			required: true
		}
	});

	UserSchema.plugin(require('mongoose-timestamp'));

	var User = app.mongoose.model('User', UserSchema);
	return User;
};