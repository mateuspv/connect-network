import { moduleForModel, test } from 'ember-qunit';

moduleForModel('post-facebook', 'Unit | Model | post facebook', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
