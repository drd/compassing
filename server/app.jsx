var React = require('react');
var Router = require('react-router');
var saferStringify = require('safer-stringify');

var model = require('./model');
var Base = require('./base');
var Routes = require('../app/routes');
var Data = require('./data');


function globalScriptAssignment(name, value) {
    return `window.${name} = ${saferStringify(value)}`;
}

let empty = () => {};

function handleRequest(req, res, next) {
    Router.run(Routes, req.path, async (Handler, state) => {
        try {
            let deps = state.routes.filter((r) => r.handler.dataDependency).reduce( (deps, r) => {
                deps[r.handler.displayName] = r.handler.dataDependency();
                return deps;
            }, {});
            let data = await Data.Resolve(deps, req);
            // generate the hydrateable application markup
            var appMarkup = React.renderToString(<Handler {...data}/>);
            var markup = React.renderToStaticMarkup(
                <Base posts={globalScriptAssignment('__data__', data)} markup={appMarkup} />
            )
            res.end(markup);
        } catch(e) {
            console.error(e);
            res.status(500).end();
        }
    });
}


export default handleRequest;
