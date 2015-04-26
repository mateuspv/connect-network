module.exports = function(app) {
  var express = require('express');
  var friendsRouter = express.Router();

  friendsRouter.get('/', function(req, res) {
    res.send({
      'friends': [
        {"name": "Tom dale", "id": "616304836", "network": "facebook", "user_image": "http://pbs.twimg.com/profile_images/1317834118/avatar_normal.png"},
        {"name": "other users", "id": "616304837", "network": "twitter"},
      ]
    });
  });

  app.use('/api/friends', friendsRouter);
};
