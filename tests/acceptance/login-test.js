import Ember from 'ember';
import {
  module,
  test
} from 'qunit';

import startApp from 'connect-network/tests/helpers/start-app';


var application;

module('Acceptance: Login', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /login without authentication', function(assert) {
  visit('/login');

  andThen(function() {
    var isAuth = currentSession().get('isAuthenticated');

    assert.equal(currentURL(), '/login');
    assert.equal(isAuth, false, 'should not have authentication');
  });
});

test('visiting /posts without authentication', function(assert) {
  visit('/posts');

  andThen(function() {
    var isAuth = currentSession().get('isAuthenticated');

    assert.equal(currentURL(), '/login', 'should be back to /login');
    assert.equal(isAuth, false, 'should not have authentication');
  });
});

test('visiting /posts with authentication', function(assert) {
  authenticateSession();
  visit('/posts');

  andThen(function() {
    var isAuth = currentSession().get('isAuthenticated');

    assert.equal(currentURL(), '/posts', 'should be on /');
    assert.equal(isAuth, true, 'should have authentication');
  });
});

test('visiting /posts with authentication', function(assert) {
  visit('/login');
  click('.btn-auth-facebook');
  click('.btn-auth-twitter');

  andThen(function() {
    var isAuth = currentSession().get('isAuthenticated');

    assert.equal(currentURL(), '/posts', 'should be on /');
    assert.equal(isAuth, true, 'should have authentication');
  });
});

