import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';
import LinkTo from '../utils/server-link';
import Session from '../utils/session';

export default Ember.Controller.extend(LoginControllerMixin, {
  queryParams: ['token'],
  token: null,

  init() {
    var realSession = this.get('session');
    Session.setup(realSession);
    Session.listenToAuth();
    Session.authenticate();
  },

  linkToAuth(handler) {
    var token = Session.extractToken();
    return LinkTo[handler](token);
  },

  linkToAuthFacebook: function() {
    return this.linkToAuth('authFacebook');
  }.property('session.token'),

  linkToAuthTwitter: function() {
    return this.linkToAuth('authTwitter');
  }.property('session.token'),

  checkForToken: function () {
    Session.setToken(this.get('token'));
    Session.authenticate();
  }.observes('token'),
});
