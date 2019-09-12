module.exports = function(app) {
    var logic = require('../app');
    app.route('/')
        .get(logic.load);
}