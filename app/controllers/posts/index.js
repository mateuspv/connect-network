import Ember from 'ember';
import PostFilter from './../../utils/post-filter';

export default Ember.ArrayController.extend({
  propertiesToSortBy: ['created_at:desc'],

  posts: Ember.computed('model', 'filterMessage', function() {
    let criteria = this.get('filterMessage');
    let posts = this.get('model');
    return PostFilter(posts).filterByMessage(criteria);
  }),

  created_at: function () {
    var created = this.get('created_at');
    return Date.parse(created);
  }.property('created_at'),
});
