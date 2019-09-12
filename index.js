require('dotenv').config();

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000;

app.use(express.static('./'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require('./control/routes');
var trans = require('./trans');
trans(app);
routes(app);

app.listen(port);
console.log(`App listening on : ${port}`);
