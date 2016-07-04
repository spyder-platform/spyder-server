module.exports = function (app) {
	var TokenSchema = app.mongoose.Schema({
		user: {
			type: app.mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true
		}
	});

	TokenSchema.plugin(require('mongoose-timestamp'));

	var Token = app.mongoose.model('Token', TokenSchema);
	return Token;
};