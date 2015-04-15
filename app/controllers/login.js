import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';
import LinkTo from '../utils/server-link';
import Session  from '../utils/session';

export default Ember.Controller.extend(LoginControllerMixin, {
  queryParams: ['token'],
  token: '',

  init() {
    var realSession = this.get('session');
    Session.init(realSession);
  },

  linkToAuthFacebook: function() {
    var token = Session.extractToken();
    return LinkTo.authFacebook(token);
  }.property('session.token'),

  linkToAuthTwitter: function() {
    var token = Session.extractToken();
    return LinkTo.authTwitter(token);
  }.property('session.token'),

  checkForToken: function () {
    Session.setToken(this.get('token'));
    Session.authenticate();
  }.observes('token'),
});
