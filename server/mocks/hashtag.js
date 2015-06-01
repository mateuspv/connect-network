module.exports = function(app) {
  var express = require('express');
  var hashtagRouter = express.Router();

  hashtagRouter.get('/', function(req, res) {
    res.send({
      'hashtag': [
        { id: 1, hashtag: 'RPG' },
        { id: 2, hashtag: 'DOTA2' },
        { id: 3, hashtag: 'TSI' },
        { id: 4, hashtag: 'Pelotas' },
        { id: 5, hashtag: '9GAG' },
      ]
    });
  });
  app.use('/api/connect/hashtags', hashtagRouter);
};
