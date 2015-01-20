var React = require('react');
var App = require('app');
require('css/site.css');

var app = React.createElement(App, {
    posts: window.__posts__
});

React.render(app, document.getElementById('all'));
