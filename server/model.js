var query = require('./db').query;


class Post {
    static async getAll() {
        let result = await query('select * from compassing.posts limit 10');
        return result.rows.map((row) => row.data);
    }
}


export {Post}
