import {
  moduleForComponent,
  test
} from 'ember-qunit';

import 'simple-auth-testing/test-helpers';

moduleForComponent('header-connect', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('it renders', function(assert) {
  assert.expect(2);

  var component = this.subject();
  assert.equal(component._state, 'preRender');

  this.render();
  assert.equal(component._state, 'inDOM');
});
