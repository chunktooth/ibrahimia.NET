
var express = require('express');
var path = require('path');
var app = express();

app.set('port')
app.use("/", express.static(path.join(__dirname, 'build')));


module.exports = app;