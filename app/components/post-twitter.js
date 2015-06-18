import Ember from 'ember';

export default Ember.Component.extend({
  shouldDisplayRetweet: function () {
    let post = this.get('post');
    let flagRetweet = this.get('retweet');
    return flagRetweet && post.get('retweet');
  }.property(''),

  _trackChange(prop) {
    var post = this.get('post');
    post.set('changes', prop);
    post.toggleProperty(prop);
    return post.save();
  },

  actions: {
    retweet() {
      let retweeted = this.get('post.retweeted');
      if(!retweeted) {
        this._trackChange('retweeted');
      }
    },

    favorite() {
      this._trackChange('favorited');
    }
  }
});
