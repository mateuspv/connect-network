import Ember from 'ember';
import CurrentPageMixin from '../../../mixins/current-page';
import { module, test } from 'qunit';

module('CurrentPageMixin');

test('it works', function(assert) {
  var CurrentPageObject = Ember.Object.extend(CurrentPageMixin);
  var subject = CurrentPageObject.create();

  subject.set('currentPath', 'post.index');

  var result = subject.get('currentPage');

  assert.equal('page-post-index', result, '#currentPage should be setted');
});
