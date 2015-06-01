import Ember from 'ember';
import LinkTo from '../utils/server-link';

/**
 * Session
 * @description encapsulates ember-simple-auth session in a singleton
 * @todo real session lives in .session, always notify it, otherwise not will trigger others observables
 */
export default Ember.Object.create({
  setup(session) {
    this.session = session;
  },

  listenToAuth() {
    this.session.on('sessionAuthenticationSucceeded', this.loadUserInformations.bind(this));
  },

  authenticate() {
    var token = this.extractToken();
    return this.session.authenticate('authenticator:custom', token);
  },

  loadUserInformations(data) {
    if(data) {
      return this._setData(data);
    }

    let URL = LinkTo.userInformations();

    return Ember
      .$.get(URL)
        .always((res) => {
          this._setData(res);
        });
  },

  extractToken() {
    return this.session.get('token') || ' ';
  },

  setToken(token) {
    let currentToken = this.session.get('token');
    if(this._isSameToken(token,currentToken)) {
      this.session.set('token', token);
    }
  },

  _isSameToken(token, comparedToken) {
    return token && token !== comparedToken;
  },

  _setData(data) {
    var realSession = this.get('session');
    return realSession.set('user', data);
  }
});
