import Ember from 'ember';
import LinkTo from '../utils/server-link';

/**
 * Session
 * @description encapsulates ember-simple-auth session in a singleton
 * @todo real session lives in .session, always notify it, otherwise not will trigger others observables
 */
export default Ember.Object.create({
  init(session) {
    this.session = session;
  },

  authenticate() {
    var session = this.get('session');
    var token = this.extractToken();

    session.on('sessionAuthenticationSucceeded', this.loadUserInformations.bind(this));

    return session.authenticate('authenticator:custom', token);
  },

  loadUserInformations() {
    var URL = LinkTo.userInformations();
    var realSession = this.get('session');
    debugger;
    return Ember
      .$.get(URL)
      .success((res) => realSession.set('user', res.user));
  },

  extractToken() {
    var session = this.get('session');
    var token = session.get('token');
    return token || '';
  },

  setToken(token) {
    var session = this.get('session');
    if(token && token !== this.get('token')) {
      session.set('token', token);
    }
  }
});
