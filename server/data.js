var model = require('./model');


function Resolve(deps) {
    try {
        return deps.reduce(async function(data, dep) {
            Object.assign(data, await dep(model));
            return data;
        }, {});
    } catch (e) {
        console.error(e);
        console.error(e.stack);
    }
}


export {Resolve};
