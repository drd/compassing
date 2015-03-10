var React = require('react');
var Router = require('react-router');
var saferStringify = require('safer-stringify');

var model = require('./model');
var Base = require('./base');
var Data = require('./data');

import {Dependencies} from '../app/data';
var Routes = require('../app/routes');


function globalScriptAssignment(name, value) {
    return `window.${name} = ${saferStringify(value)}`;
}

let empty = () => {};

function handleRequest(req, res, next) {
    Router.run(Routes, req.path, async (Handler, state) => {
        try {
            let data = await Data.Resolve(Dependencies(state));
            // generate the hydrateable application markup
            var appMarkup = React.renderToString(<Handler {...data}/>);
            var markup = React.renderToStaticMarkup(
                <Base data={globalScriptAssignment('__data__', data)} markup={appMarkup} />
            )
            res.end(markup);
        } catch(e) {
            console.error(e);
            res.status(500).end();
        }
    });
}


export default handleRequest;
