import Immutable from 'immutable';
var query = require('./db').query;


let postMapper = result => result.rows.map(row => ({id: row.id, ...row.data}));

class Post {
    static async all() {
        let result = await query('select * from compassing.posts limit 10');
        return postMapper(result);
    }

    static async get(id) {
        let result = await query('select * from compassing.posts where id = $1', [id]);
        return postMapper(result)[0];
    }

    static async create(id, data) {
        let result = await query('insert into compassing.posts (data) values ($1) returning *', [data]);
        return postMapper(result);
    }

    static async update(id, data) {
        let result = await query('update compassing.posts set data = $1 returning *', [data]);
        return postMapper(result);
    }
}


export {Post}
