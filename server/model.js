import Immutable from 'immutable';
var query = require('./db').query;


class Post {
    static async all() {
        let result = await query('select * from compassing.posts limit 10');
        return result.rows.map((row) => ({id:row.id, ...row.data}));
    }

    static async get(id) {
        let result = await query('select * from compassing.posts where id = $1', [id]);
        return result.rows.map((row) => ({id:row.id, ...row.data}))[0];
    }
}


export {Post}
