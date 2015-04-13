import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';
import LinkTo from '../utils/server-link';

export default Base.extend({

  _setupAjax(token) {
    var config = {};

    config.beforeSend = function(xhr) {
      xhr.setRequestHeader('token', token);
    };

    return function (data) {
      Ember.$.ajaxSetup(config);
    };
  },

  _setupSession(session) {
    return (data) => {
      this._session.set('user', data.user);
    }
  },

  authenticate: function(options) {
    var {token, session} = options;
    var url = LinkTo.checkAuth(token)
    this._session = session;

    var isAuthenticated = Ember.$.ajax({
      type: 'POST',
      url: url,
      contentType: 'application/json',
      dataType: 'json',
    });

    isAuthenticated.success(this._setupAjax(token));
    isAuthenticated.success(this._setupSession(session));

    return isAuthenticated;
  }
});
