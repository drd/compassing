var pg = require('pg').native;
var pgUrl = "postgres://compassing:compassing@localhost/compassing"; // FIXME


// async, public api

async function query(query, params) {
    let {client, done} = await _getClient();
    return await _runQuery(client, done, query, params);
}


// promise-based internal functions

function _getClient() {
    return new Promise((resolve, reject) => {
        pg.connect(pgUrl, (err, client, done) => {
            if (err) {
                reject(err);
            }
            resolve({client, done});
        });
    });
}


function _runQuery(client, done, query, params) {
    return new Promise((resolve, reject) => {
        client.query(query, params, (err, result) => {
            done();
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}


export {query};
