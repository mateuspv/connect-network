import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';
import LinkTo from '../utils/server-link';
import Session  from '../utils/session';

export default Base.extend({

  _setupAjax(token) {
    let config = {};

    config.beforeSend = function(xhr) {
      xhr.setRequestHeader('token', token);
    };

    return Ember.$.ajaxSetup(config);
  },

  authenticate: function(token) {
    if(!token) {
      return;
    }

    let url = LinkTo.checkAuth(token);
    this._setupAjax(token);

    let isAuthenticated = Ember.$.ajax({
      type: 'POST',
      url,
      contentType: 'application/json',
      dataType: 'json',
    });

    isAuthenticated
      .always((data) => {
        this._setupAjax(token);
        Session.loadUserInformations(data.responseJSON);
      });

    return isAuthenticated;
  }
});
