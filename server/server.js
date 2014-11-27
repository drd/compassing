require('node-jsx').install({extension: '.jsx'});

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var React = require('react');

var Layout = React.createFactory(require('./layout.jsx'));
var App = React.createFactory(require('../app/app.jsx'));


start();


function start() {
    var server = express();
    server.use(bodyParser.json());
    server.use(cors());
    server.use(handleRequest);
    server.listen(process.env['LISTEN_PORT'] || 3001, function(err, result) {
        if (err) return console.log(err);
        console.log("Listening on port 3001");
    });
}


function handleRequest(req, res, next) {
    var markup = React.renderToStaticMarkup(Layout(null, App()));
    res.end(markup);
}
