var pg = require('pg').native;

var pgUrl = "postgres://compassing:compassing@localhost/compassing";


function getClient() {
    return new Promise((resolve, reject) => {
        pg.connect(pgUrl, (err, client, done) => {
            if (err) {
                reject(err);
            }
            resolve({client, done});
        });
    });
}

function query(client, done, query) {
    return new Promise((resolve, reject) => {
        client.query(query, (err, result) => {
            done();
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}

function Post() {
};


Post.getAll = async function() {
    let {client, done} = await getClient();
    let result = await query(
        client, done, 'select * from compassing.posts limit 10');
    return result.rows.map((row) => row.data);
}

export {Post}
