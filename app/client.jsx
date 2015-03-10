var React = require('react');
var Router = require('react-router');

var Routes = require('./routes');
var Data = require('./data');

require('css/site.css');

start();

function start() {
    Router.run(Routes, Router.HistoryLocation, async function(Handler, state) {
        let data = await Data.Resolve(Data.Dependencies(state));
        React.render(<Handler {...data}/>, document.getElementById('all'));
    });
}
