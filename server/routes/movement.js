var router = require('express').Router();
var multer = require('multer');
var mime = require('mime');

var upload = multer({ storage: multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'storage/')
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + '.' + mime.extension(file.mimetype));
	}
})});

module.exports = function (app) {
	router.post('/',
		app.middlewares.authenticated,
		upload.single('photo'),
		app.actions.movement.create
	);

	router.get('/',
		app.middlewares.authenticated,
		app.actions.movement.list
	);

	router.get('/:id',
		app.middlewares.authenticated,
		app.actions.movement.show
	);

	router.delete('/:id',
		app.middlewares.authenticated,
		app.actions.movement.delete
	);

	return router;
};