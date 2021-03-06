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

    // on prod it is fb && tw
    if(fb === true || tw === true) {
      return res.send({
        token: token,
        isAuthenticated: true,
        isAuthFacebook: true,
        isAuthTwitter: true
      });
    }

    return res.status(401);
  });

  route.get('/user', function(req, res) {
    res.send({
      tweets: '101',
      following: '110',
      follower: '260',
      profile_image: 'http://localhost:4200/images/mock.jpg',
      profile_banner_url: 'https://pbs.twimg.com/profile_banners/81441868/1420364701/600x200',
      name: 'Mateus Vahl',
      description: 'insert cool description here'
    });
  });

  app.use('/api/auth', route);
};
