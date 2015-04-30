import Ember from 'ember';

export default Ember.Component.extend({
  _isFrom(expected) {
    var post = this.get('post');
    var network = post.get('network') || false;

    return network === expected ? true : false;
  },

  isTwitter: function () {
    return this._isFrom('twitter');
  }.property(''),

  isFacebook: function () {
    return this._isFrom('facebook');
  }.property(''),
});
