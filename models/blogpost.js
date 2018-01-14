'use strict';
module.exports = (sequelize, DataTypes) => {
  var BlogPost = sequelize.define('BlogPost', {
    postDate: DataTypes.DATE,
    content: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return BlogPost;
};