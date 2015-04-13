import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'connect-network/tests/helpers/start-app';

var application;
var header;
var menuLoggedOut;
var menuLogged;

module('Acceptance: ConnectHeader', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
    header = undefined;
    menuLoggedOut = undefined;
    menuLogged = undefined;
  }
});

test('Without authentication', function (assert) {
  invalidateSession();

  visit('/');

  andThen(function () {
    header = Ember.$('.header');
    menuLoggedOut = header.find('[menu-logged-out]');
    menuLogged = header.find('[menu-logged]');

    assert.equal(true, menuLoggedOut.is(':visible'), 'logged out menu should be visible');
    assert.equal(false, menuLogged.is(':visible'), 'logged menu should be not visible');
  });
});

test('With authentication', function (assert) {
  authenticateSession();

  visit('/');

  andThen(function () {
    header = Ember.$('.header');
    menuLoggedOut = header.find('[menu-logged-out]');
    menuLogged = header.find('[menu-logged]');

    assert.equal(false, menuLoggedOut.is(':visible'), 'logged out menu should be not visible');
    assert.equal(true, menuLogged.is(':visible'), 'logged menu should be visible');
  });
});
