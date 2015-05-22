module.exports = function(app) {
  var express = require('express');
  var searchRouter = express.Router();
  //[{"id":592917929659793400,"user_image":"http://pbs.twimg.com/profile_images/578391802111139840/YhoPELoD_normal.jpeg","network":"twitter","video":"<a href=\"http://twitter.com/download/iphone\" rel=\"nofollow\">Twitter for iPhone</a>","image":"","created_at":"Tue Apr 28 05:07:04 +0000 2015","from":"Ana Carolina Pereira","from_id":"17451208","message":"@OliverHorschel @ThreeDRobot @Robotpencil I'm loving the teeth!!","shares_count":"","user_shares":false,"likes_count":"","user_likes":false}]
  searchRouter.get('/', function(req, res) {
    res.send({
      search: {
        id: 1,
        user_facebook: [1],
        user_twitter: [2],
        page_facebook: [3],
        group_facebook: [4],
        post_twitter: [55],
      },
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
        id:1,
        name: 'mateus patzlaff',
        screenname: 'mateuspv',
        bio: 'dev',
        cover: 'http://pbs.twimg.com/profile_images/578391802111139840/YhoPELoD_normal.jpeg',
        image: 'http://pbs.twimg.com/profile_images/578391802111139840/YhoPELoD_normal.jpeg',
        link: 'www.google.com'
        },
        {
        id:2,
        name: 'mateus vahl',
        screenname: 'mateuspv',
        bio: 'dev',
        cover: 'http://pbs.twimg.com/profile_images/578391802111139840/YhoPELoD_normal.jpeg',
        image: 'http://pbs.twimg.com/profile_images/578391802111139840/YhoPELoD_normal.jpeg',
        link: 'www.google.com'
        }
      ],
      page_facebook: [
        {
        id:3,
        name: 'League of legends',
        description: 'dev',
        cover: 'http://pbs.twimg.com/profile_images/578391802111139840/YhoPELoD_normal.jpeg',
        link: 'www.google.com'
        }
      ],
      group_facebook: [
        {
          id: 4,
          name: 'Stylus',
          icon: 'https://fbstatic-a.akamaihd.net/rsrc.php/v2/yx/r/YizVmKKkb90.png',
          cover: 'https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/s720x720/1524066_779163332110655_307018926_o.jpg',
          description: '"grupo para discussão e evangelização do Stylus no Brasil.',
        }
      ],
      post_twitter: [
        {id: 55,
        user: 2,
        message: 'hello world',
        created_at: '11',
        favorited: false,
        retweeted: true,
        favorite_count: 11,
        retweet_count: 12,}

      ]
    });
  });

  app.use('/api/connect/search', searchRouter);
};
