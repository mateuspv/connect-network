module.exports = function(app) {
  var express = require('express');
  var profilesRouter = express.Router();

  profilesRouter.get('/', function(req, res) {
    res.send({
      'profiles': [{
        'id': 1,
        'name': 'Mateus Vahl',
        'user_image': 'https://d262ilb51hltx0.cloudfront.net/fit/c/449/449/0*3uRkXyMScXd4iFmF.jpeg',
        'description': 'I love ember JS',
        'posts_total': '99',
        'friends_count': '120',
        'followers_count': '33',
        'profile_banner_url': 'https://pbs.twimg.com/profile_banners/81441868/1420364701',
        'profile_color': '#333',
        'network': 'facebook',
        'posts': [1,2]
        }],
      'posts': [
        {
          "id": 1,
          "network": "facebook",
          "created_at": "Wed Feb 04 2015 03:17:58 GMT-0200 (BRST)",
          "from": "Mateus",
          "message": "#hello My taxi pulled up to the hotel. I got out my credit card and prepared to pay for the ride. The journey was pleasant enough but little did I know I was about to encounter a bit of psychological trickery designed to get me to pay more for the lift. Chances are you’re paying more, too.",
          "shares_count": "1",
          "likes_count": "2",
          "user_likes": false,
        },
        {
          "id": 2,
          "network": "facebook",
          "created_at": "Wed Feb 04 2015 03:17:58 GMT-0200 (BRST)",
          "from": "Mateus Vahl",
          "message": "Post 2 on profile",
          "shares_count": "1",
          "likes_count": "2",
          "user_likes": false,
        },
      ]
    });
  });


  app.use('/api/connect/profiles', profilesRouter);
};
