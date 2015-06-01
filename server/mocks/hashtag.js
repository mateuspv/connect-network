module.exports = function(app) {
  var express = require('express');
  var hashtagRouter = express.Router();

  hashtagRouter.get('/', function(req, res) {
    res.send({
      'hashtag': [
        { id: 0, hashtag: '#TheVoiceChile' },
        { id: 1, hashtag: '#GameofThrones' },
        { id: 2, hashtag: '#Superstar' },
        { id: 3, hashtag: '#WWEChamber' },
        { id: 4, hashtag: '#FPfecha14' },
        { id: 5, hashtag: 'Querétaro'},
        { id: 6, hashtag: 'Gago'},
        { id: 7, hashtag: 'Velez'},
        { id: 8, hashtag: 'Millonarios'},
        { id: 9, hashtag: 'South West'},
      ]
    });
  });
  app.use('/api/connect/hashtags', hashtagRouter);
};
