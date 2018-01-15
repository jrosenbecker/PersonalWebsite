const express = require('express');
const router = express.Router();
const path = require('path');
var models = require(path.join(__dirname, '..', 'models'));
var blogPostService = require('../services/blogPostService');

router.get('/getRecentBlogPosts/:numberOfPosts', (req, res) => {
    var numberOfPosts = req.param('numberOfPosts');
    var posts = blogPostService.getRecentBlogPosts(numberOfPosts).then(posts => {
        console.log(posts);
        res.send(posts)
    }).catch((err) => {
        console.log(err);
        res.send(JSON.stringify(err));
    });
    
})

module.exports = router;