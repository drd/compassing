import superagent from 'superagent';
var _ = require('underscore');

var model = require('./model');


function Dependencies(state) {
    return state.routes
        .filter((r) => r.handler.dataDependency)
        .map(r => _.partial(r.handler.dataDependency, state.params));
}


function Resolve(deps) {
    try {
        // TODO: use Promise.all()?
        let data = deps.reduce(async function(data, dep) {
            Object.assign(data, await dep(model));
            return data;
        }, {});
        console.log('data', data);
        return data;
    } catch (e) {
        console.error(e);
        console.error(e.stack);
    }
}


export {Dependencies, Resolve};
