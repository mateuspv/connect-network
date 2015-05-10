/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'connect-network',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    contentSecurityPolicy: {
      'Access-Control-Allow-Headers': '*',
      'default-src': "'unsafe-inline'",
      'script-src': "'self'",
      'font-src': "'self' http://fonts.googleapis.com:* http://fonts.gstatic.com:*",
      'style-src': "'self' http://fonts.googleapis.com:*",
      'connect-src': "'self'",
      'img-src': "'self' https://twitter.com:* https://pbs.twimg.com:* http://pbs.twimg.com:* https://fbstatic-a.akamaihd.net:* https://fbcdn-sphotos-d-a.akamaihd.net:* http://graph.facebook.com:*",
      'media-src': "'self'",
      'frame-src': "http://www.youtube.com"
    },

    'simple-auth': {
      routeAfterAuthentication: 'posts.index',
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.APP.URL_API = 'http://localhost:4200';
    ENV.APP.URL_AUTH_STATUS = ENV.APP.URL_API + '/api/auth/status';
    ENV.APP.URL_AUTH_FACEBOOK = ENV.APP.URL_API + '/api/auth/facebook';
    ENV.APP.URL_AUTH_TWITTER = ENV.APP.URL_API + '/api/auth/twitter';
    ENV.APP.URL = 'http://localhost:4200/';

    ENV['simple-auth'].store = 'simple-auth-session-store:local-storage';
  }

  if (environment === 'test') {
    ENV.APP.URL_API = 'http://localhost:4200';
    ENV.APP.URL_AUTH_STATUS = ENV.APP.URL_API + '/api/auth/status';
    ENV.APP.URL_AUTH_FACEBOOK = ENV.APP.URL_API + '/api/auth/facebook';
    ENV.APP.URL_AUTH_TWITTER = ENV.APP.URL_API + '/api/auth/twitter';
    ENV.APP.URL = 'http://localhost:4200/';

    ENV['simple-auth'].store = 'simple-auth-session-store:ephemeral';

    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.URL_API = 'https://connect-server.herokuapp.com';
    ENV.APP.URL_AUTH_STATUS = ENV.APP.URL_API + '/api/auth/status';
    ENV.APP.URL_AUTH_FACEBOOK = ENV.APP.URL_API + '/api/auth/facebook';
    ENV.APP.URL_AUTH_TWITTER = ENV.APP.URL_API + '/api/auth/twitter';
    ENV.APP.URL = 'https://connect-network.herokuapp.com/';
    ENV['simple-auth'].store = 'simple-auth-session-store:local-storage';
  }

  ENV['simple-auth'].authorizer ='authorizer:custom';
  ENV['simple-auth'].crossOriginWhitelist = [ENV.APP.URL_API, ENV.APP.URL];

  return ENV;
};
