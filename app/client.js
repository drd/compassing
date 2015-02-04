var React = require('react');
var Router = require('react-router');
var Routes = require('./routes');

require('css/site.css');

start();

function start() {
    Router.run(Routes, Router.HistoryLocation, (Handler) => {
        React.render(React.createElement(Handler, {posts: window.__posts__}), document.getElementById('all'));
    });
}
