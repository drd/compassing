require('babel/register')({experimental: true});
var babel = require('babel');

require('node-jsx').install({
    extension: '.jsx',
    postTransform: function(f, o) {
        return babel.transform(f, {experimental: true}).code;
    }
});

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var api = require('./api');
var app = require('./app');

start();


function start() {
    var server = express();
    server.use(bodyParser.json());
    server.use(cors());
    server.use('/api/v1', api);
    server.use(app);
    server.listen(process.env['LISTEN_PORT'] || 3001, function(err, result) {
        if (err) return console.log(err);
        console.log("Listening on port 3001");
    });
}
