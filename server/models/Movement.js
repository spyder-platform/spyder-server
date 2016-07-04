module.exports = function (app) {
	var MovementSchema = app.mongoose.Schema({
		path: {
			type: String,
			required: true
		},
		user: {
			type: app.mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true
		}
	});

	MovementSchema.plugin(require('mongoose-timestamp'));

	var Movement = app.mongoose.model('Movement', MovementSchema);
	return Movement;
};