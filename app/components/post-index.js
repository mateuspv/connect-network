import Ember from 'ember';

export default Ember.Component.extend({

  isTwitter: function () {
    return this._isFrom('twitter');
  }.property(''),

  isFacebook: function () {
    return this._isFrom('facebook');
  }.property(''),

  likeText: function () {
    let post = this.get('post');
    let isLiked = post.get('user_likes');

    return isLiked ? 'liked' : 'like';
  }.property('post.user_likes'),

  _isFrom(expected) {
    let post = this.get('post');
    let network;
    try {
      network = post.get('network');
    }
    catch(e) {
      network = post.network || false;
    }

    return network === expected ? true : false;
  },

  _trackChange(prop) {
    var post = this.get('post');
    post.set('changes', prop);
    post.toggleProperty(prop);
    return post.save();
  },

  actions: {
    like() {
      var post = this.get('post');
      post.set('changes', 'like');
      post.toggleProperty('user_likes', true);
      return post.save();
    },
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
