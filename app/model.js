let request = require('superagent');

function get(url, params) {
    return new Promise((resolve, reject) => {
        request.get('/api/v1' + url)
            .send(params)
            .end((err, result) => {
                if (!result.ok) {
                    err = {message: res.text,
                           code: res.statusCode};
                }
                if (err) {
                    reject(err);
                } else {
                    resolve(result.body);
                }
            });
    });
}

class Post {
    static all() {
        // return get('/posts');
        let posts = get('/posts');
        console.log('posts be', posts);
        return posts;
    }

    static get(id) {
        return get('/posts/' + id);
    }
}


export {Post};
