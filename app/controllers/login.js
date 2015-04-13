import Ember from 'ember';
import config from '../config/environment';

import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  queryParams: ['token'],
  token: '',

  _reSetToken() {
    var session = this.get('session');

    if(!session) {
      return;
    }

    var token = session.get('token');
    var queryToken = this.get('token');
    var actualToken = queryToken || token || '';
    return session.set('token', actualToken);
  },

  init() {
    this._reSetToken();
  },

  _linkTo(link) {
    var session = this.get('session');
    var token = session.get('token') || '';
    return `${link}?token=${token}`;
  },

  _linkToAuth(link) {
    var session = this.get('session');
    var token = session.get('token') || '';
    var redirect = config.APP.URL_API;
    return `${link}?token=${token}&redirect=${redirect}`;
  },

  linkToAuthFacebook: function() {
    var link = config.APP.URL_AUTH_FACEBOOK;
    return this._linkToAuth(link);
  }.property('session.token'),

  linkToAuthTwitter: function() {
    var link = config.APP.URL_AUTH_TWITTER;
    return this._linkToAuth(link);
  }.property('session.token'),

  checkForToken: function () {
    this._reSetToken();
    var session = this.get('session');
    var token = this.get('token');

    session.authenticate('authenticator:custom', token)
      .then(null, (error) => this.set('errorMessage', error.error));
  }.observes('token')
});
