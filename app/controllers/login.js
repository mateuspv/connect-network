import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';
import LinkTo from '../utils/server-link';

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

  _extractToken() {
    var session = this.get('session');
    return session.get('token') || '';
  },

  linkToAuthFacebook: function() {
    var token = this._extractToken();
    return LinkTo.authFacebook(token);
  }.property('session.token'),

  linkToAuthTwitter: function() {
    var token = this._extractToken();
    return LinkTo.authTwitter(token);
  }.property('session.token'),

  loadUserInformations() {
    var URL = LinkTo.userInformations()
    Ember
      .$.get(URL)
      .success((res) => this.get('session').set('user', res.user));
  },

  checkForToken: function () {
    this._reSetToken();
    var session = this.get('session');
    var token = this.get('token');

    session.authenticate('authenticator:custom', {token, session});
    session.on('sessionAuthenticationSucceeded', this.loadUserInformations.bind(this));

  }.observes('token'),
});
