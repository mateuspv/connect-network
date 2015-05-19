import Ember from 'ember';

export default Ember.ArrayController.extend({
  propertiesToSortBy: ['created_at:desc'],

  created_at: function () {
    var created = this.get('created_at');
    return Date.parse(created);
  }.property('created_at'),

  posts: Ember.computed.sort('model', 'propertiesToSortBy'),
});
