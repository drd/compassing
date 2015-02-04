var React = require('react');
var Router = require('react-router');

var model = require('./model');
var Base = require('./base');
var Routes = require('../app/routes');


function globalScriptAssignment(name, value) {
    return `window.${name} = ${JSON.stringify(value)}`;
}

async function handleRequest(req, res, next) {
    let posts = await model.Post.getAll();
    Router.run(Routes, req.path, (Handler) => {
        var appMarkup = React.renderToString(
            React.createElement(Handler, {posts})
        );
        var markup = React.renderToStaticMarkup(
            React.createElement(
                Base,
                {posts: globalScriptAssignment('__posts__', posts)},
                appMarkup
            )
        );
        res.end(markup);
    });
}


export default handleRequest;
