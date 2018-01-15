const path = require('path');
var models = require('../models');

module.exports = {
    getRecentBlogPosts: function(numberOfPosts) {
        var posts = models.BlogPost.findAll({
            order: [
                ['postDate', 'DESC']
            ]
        });
        
        return posts;
    }
}