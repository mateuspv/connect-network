module.exports = function(app) {
  var express = require('express');
  var groupsRouter = express.Router();

  groupsRouter.get('/:id', function(req, res) {
    res.send({
      group_facebook: {
        id: 778902298844266,
        posts: [1]
      },
      post_facebook: [{
        id:1,
        message: 'hi'
      }]
    });
  });
  app.use('/api/connect/groups', groupsRouter);
};
