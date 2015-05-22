module.exports = function(app) {
  var express = require('express');
  var searchRouter = express.Router();
  //[{"id":592917929659793400,"user_image":"http://pbs.twimg.com/profile_images/578391802111139840/YhoPELoD_normal.jpeg","network":"twitter","video":"<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>","image":"","created_at":"Tue Apr 28 05:07:04 +0000 2015","from":"Ana Carolina Pereira","from_id":"17451208","message":"@OliverHorschel @ThreeDRobot @Robotpencil I'm loving the teeth!!","shares_count":"","user_shares":false,"likes_count":"","user_likes":false}]
  searchRouter.get('/', function(req, res) {
    res.send({
      search: { id: 1, user_facebook: [1], user_twitter: [2] },
      user_facebook: [
        {
        id:1,
        name: 'mateus',
        cover: 'http://pbs.twimg.com/profile_images/578391802111139840/YhoPELoD_normal.jpeg',
        link: 'www.google.com'
        }
      ],
      user_twitter: [
        {
        id:2,
        name: 'mateus vahl',
        screenname: 'mateuspv',
        bio: 'dev',
        cover: 'http://pbs.twimg.com/profile_images/578391802111139840/YhoPELoD_normal.jpeg',
        link: 'www.google.com'
        }
      ]
    });
  });

  app.use('/api/connect/search', searchRouter);
};
