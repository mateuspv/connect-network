import cssCurrentPage from '../../../utils/css-current-page';
import { module, test } from 'qunit';

module('cssCurrentPage');

test('Path without level', function(assert) {
  var result = new cssCurrentPage('').path();
  assert.equal('page', result);
});

test('Path with one level', function(assert) {
  var result = new cssCurrentPage('posts').path();
  assert.equal('page-posts', result);
});

test('Path with two level', function(assert) {
  var result = new cssCurrentPage('posts.index').path();
  assert.equal('page-posts-index', result);
});

test('Path with three level', function(assert) {
  var result = new cssCurrentPage('posts.post.comments').path();
  assert.equal('page-posts-post-comments', result);
});

test('With `ember` word prefixed', function(assert) {
  var currentPage = new cssCurrentPage('posts');
  var result;

  currentPage.prefix('ember');

  result = currentPage.path();

  assert.equal('ember-posts', result);
});

test('Underscore as separator', function(assert) {
  var currentPage = new cssCurrentPage('posts');
  var result;

  currentPage.separator('_');

  result = currentPage.path();

  assert.equal('page_posts', result);
});
