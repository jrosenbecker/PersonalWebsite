const express = require('express');
const router = express.Router();
const path = require('path');
const moment = require('moment');
const authCheck = require('../auth');
var models  = require(path.join(__dirname, "..", "models"));

router.post('/createBlogPost', authCheck, (req, res, error) => {
    models.BlogPost.create(req.body);
    res.sendStatus(200);
});

router.get('/protectedRoute', authCheck, (req, res) => {
    res.send('You made it');
});

module.exports = router;