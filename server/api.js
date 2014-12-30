var router = require('express').Router();
var pg = require('pg').native;

var pgUrl = "postgres://compassing:compassing@localhost/compassing";

function handleError(err, res) {
    if (!err) {
        return false;
    }
    console.error("Failure to connect", err);
    console.error(err.stack);
    res.status(500).send(err.stack);
    return true;
}

/* 
   Okay, so much to do here.
   - model objects
   - default schema
   - migrations
   - any amount of abstraction :)
*/

router.get('/', function(req, res) {
    pg.connect(pgUrl, function(err, client, done) {
        if (handleError(err, res)) {
            return;
        }

        client.query('select * from compassing.posts limit 10', function(err, result) {
            if (handleError(err, res)) {
                return;
            }
            done();
            
            var json = result.rows.map(function(row) {
                return row.data;
            });

            res.json(json);
        });
    });
    return [];
});

module.exports = router;


