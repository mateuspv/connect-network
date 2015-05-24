import Ember from 'ember';

export default Ember.Component.extend({
  shouldDisplayRetweet: function () {
    let post = this.get('post');
    let flagRetweet = this.get('retweet');
    return flagRetweet && post.get('retweet');
  }.property('')
});
