module.exports = function(app) {
  var express = require('express');
  var route = express.Router();

  route.get('/', function(req, res) {
    res.send({
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
          "network": "twitter",
          "created_at": "Wed Feb 04 2015 03:17:58 GMT-0200 (BRST)",
          "from": "Mateus",
          "message": "Post 2",
          "shares_count": "1",
          "likes_count": "2",
          "user_likes": false,
        },
      ]
    });
  });
  app.use('/api/posts', route);
};
