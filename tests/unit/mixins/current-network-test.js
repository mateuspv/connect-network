import Ember from 'ember';
import CurrentNetworkMixin from '../../../mixins/current-network';
import { module, test } from 'qunit';

module('CurrentNetworkMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var CurrentNetworkObject = Ember.Object.extend(CurrentNetworkMixin);
  var subject = CurrentNetworkObject.create();
  assert.ok(subject);
});
