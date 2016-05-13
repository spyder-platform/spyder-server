module.exports = function(app){
    app.actions = {};
    app.actions.account = require('./account')(app);
};