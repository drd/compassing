var model = require('./model');
var router = require('express').Router();


router.param('id', (req, res, next) => {
    req.id = parseInt(req.params.id, 10);
    next();
});

router.get('/posts', async function(req, res) {
    try {
        let posts = await model.Post.all();
        res.json(posts);
    } catch(e) {
        console.log(e);
        res.status(500).send(e.message);
    }
});


router.get('/posts/:id', async function(req, res) {
    try {
        let post = await model.Post.get(req.params.id);
        res.json(post);
    } catch(e) {
        console.log(e);
        res.status(500).send(e.message);
    }
});


router.post('/posts', async function(req, res) {
    try {
        let post = await model.Post.create(req.params.id, req.body);
        res.json(post);
    } catch(e) {
        console.log(e);
        res.status(500).send(e.message);
    }
})

router.put('/posts/:id', async function(req, res) {
    try {
        let post = await model.Post.update(req.params.id, req.body);
        res.json(post);
    } catch(e) {
        console.log(e);
        res.status(500).send(e.message);
    }
});


export default router;
