var React = require('react');

var model = require('./model');
var Base = require('./base');
var App = require('../app/app');


function globalScriptAssignment(name, value) {
    return `window.${name} = ${JSON.stringify(value)}`;
}

async function handleRequest(req, res, next) {
    let posts = await model.Post.getAll();

    var appMarkup = React.renderToString(
        React.createElement(App, {posts})
    );

    var markup = React.renderToStaticMarkup(
        React.createElement(
            Base,
            {posts: globalScriptAssignment('__posts__', posts)},
            appMarkup
        )
    );
    res.end(markup);
}


export default handleRequest;
