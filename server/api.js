var model = require('./model');
var router = require('express').Router();


router.get('/', async function(req, res) {
    try {
        let posts = await model.Post.getAll();
        console.log(posts);
        res.json(posts);
    } catch(e) {
        console.log(e);
        res.status(500).send(e.message);
    }
});

export default router;
