import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';
import LinkTo from '../utils/server-link';
import Session  from '../utils/session';

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

  _setupSession(data) {
    Session.set('user', data.user);
  },

  authenticate: function(token) {
    if(!token) {
      return;
    }

    var url = LinkTo.checkAuth(token);

    var isAuthenticated = Ember.$.ajax({
      type: 'POST',
      url: url,
      contentType: 'application/json',
      dataType: 'json',
    });

    isAuthenticated.success(this._setupAjax(token));
    isAuthenticated.success(this._setupSession);

    return isAuthenticated;
  }
});
