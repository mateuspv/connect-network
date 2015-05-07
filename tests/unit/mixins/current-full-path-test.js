import Ember from 'ember';
import CurrentFullPathMixin from '../../../mixins/current-full-path';
import { module, test } from 'qunit';

module('CurrentFullPathMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var CurrentFullPathObject = Ember.Object.extend(CurrentFullPathMixin);
  var subject = CurrentFullPathObject.create();
  assert.ok(subject);
});
