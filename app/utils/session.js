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

  loadUserInformations(data) {
    if(data) {
      return this._setData(data);
    }

    let URL = LinkTo.userInformations();

    return Ember
      .$.get(URL)
        .always((res) => {
          this._setData(res.user);
        });
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
  },

  _setData(data) {
    var realSession = this.get('session');
    debugger;
    console.log('setting::::', data);
    return realSession.set('user', data);
  }
});
