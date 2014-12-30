require('node-jsx').install({extension: '.jsx', harmony: true});

var React = require('react');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var api = require('./api');

var Layout = React.createFactory(require('./layout'));
var App = React.createFactory(require('../app/app'));


start();


function start() {
    var server = express();
    server.use(bodyParser.json());
    server.use(cors());
    server.use('/api/v1', api);
    server.use(handleRequest);
    server.listen(process.env['LISTEN_PORT'] || 3001, function(err, result) {
        if (err) return console.log(err);
        console.log("Listening on port 3001");
    });
}


function handleRequest(req, res, next) {
    var app = React.renderToString(App());
    var markup = React.renderToStaticMarkup(Layout(null, app));
    res.end(markup);
}
