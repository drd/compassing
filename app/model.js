let request = require('superagent');

let errOrHttpErr = (err, result) => err || result.ok ? null : {message: result.text, code: res.statusCode};

function requestHandler(resolve, reject) {
    return function(err, result) {
        err = errOrHttpErr(err, result);
        if (err) {
            reject(err);
        } else {
            resolve(result.body);
        }
    }
}


function get(url, params) {
    return new Promise((resolve, reject) => {
        request.get('/api/v1' + url)
            .send(params)
            .end(requestHandler(resolve, reject));
    });
}

function post(url, data) {
    return new Promise((resolve, reject) => {
        request.post('/api/v1' + url)
            .send(data)
            .end(requestHandler(resolve, reject));
    });
}

function put(url, data) {
    return new Promise((resolve, reject) => {
        request.put('/api/v1' + url)
            .send(data)
            .end(requestHandler(resolve, reject));
    });
}

class Post {
    static all() {
        return get('/posts');
    }

    static get(id) {
        return get('/posts/' + id);
    }

    static save(id, data) {
        return id ? put('/posts/' + id, data) : post('/posts/', data);
    }
}


export {Post};
