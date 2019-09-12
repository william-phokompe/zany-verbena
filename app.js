var data = require('./trans');

var load = function(request, response) {
    response.sendFile(`${__dirname}/views/index.htm`);
}, fileanalyse = function(request, response) {
    console.log(data.myfile);
    response.send('');
};

module.exports = {
    load,
    fileanalyse
};