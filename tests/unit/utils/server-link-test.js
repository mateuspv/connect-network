import serverLink from '../../../utils/server-link';
import { module, test } from 'qunit';

module('serverLink');

test('authFacebook', function(assert) {
  var result = serverLink.authFacebook('abc');
  var expected = 'http://localhost:4200/api/auth/facebook?token=abc&redirect=http://localhost:4200/';
  assert.equal(result, expected);
});

test('authTwitter', function(assert) {
  var result = serverLink.authTwitter('abc');
  var expected = 'http://localhost:4200/api/auth/twitter?token=abc&redirect=http://localhost:4200/';
  assert.equal(result, expected);
});

test('userInformations', function(assert) {
  var result = serverLink.userInformations('abc');
  var expected = 'http://localhost:4200/api/auth/user';
  assert.equal(result, expected);
});

test('checkAuth', function(assert) {
  var result = serverLink.checkAuth('abc');
  var expected = 'http://localhost:4200/api/auth/status?token=abc';
  assert.equal(result, expected);
});
