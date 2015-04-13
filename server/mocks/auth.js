module.exports = function(app) {
  var express = require('express');
  var route = express.Router();


  var getToken = function (req) {
    console.log(token)
    var token = req.query.token;
    if(token === 'null') {
      return '';
    }

    return token;
  };

  var isAuthFacebook= function (token) {
    return token.indexOf('fb') > -1;
  };

  var isAuthTwitter = function (token) {
    return token.indexOf('tw') > -1;
  };

  var doAuth = function (authFn, tokenStr) {
    return function (req, res) {
      var redirect = req.query.redirect;
      var currentToken = getToken(req);
      var token = '';
      if(!authFn(currentToken)) {
        token = currentToken + tokenStr;
      }
      return res.redirect(redirect + '?token=' + token);
    }
  };

  route.get('/facebook', doAuth(isAuthFacebook, 'fb'));
  route.get('/twitter', doAuth(isAuthTwitter, 'tw'));


  route.post('/status', function (req, res) {
    var token = getToken(req);
    var fb = isAuthFacebook(token);
    var tw = isAuthTwitter(token);

    if(fb === false || tw === false) {
      res.status(401);
    }

    res.send({
      token: token,
      isAuthenticated: true,
      isAuthFacebook: fb,
      isAuthTwitter: tw,
    });
  });

  app.use('/api/auth', route);
};
