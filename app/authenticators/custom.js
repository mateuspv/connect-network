import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';

export default Base.extend({

  _setupAjax(token) {
    var config = {};

    config.beforeSend = function(xhr) {
      xhr.setRequestHeader('token', token);
    };

    return function () {
      Ember.$.ajaxSetup(config);
    };
  },

  authenticate: function(token = '') {
    return Ember.$.ajax({
      type: 'POST',
      url: `/api/auth/status?token=${token}`,
      contentType: 'application/json',
      dataType: 'json',
    })
      .success(this._setupAjax(token));
  }
});
