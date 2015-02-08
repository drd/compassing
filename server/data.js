var model = require('./model');


async function Resolve(dep, req) {
    try {
        let posts = await model.Post.getAll();
        return {posts};
    } catch (e) {
        console.error(e);
    }
}


export {Resolve};
