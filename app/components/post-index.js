import Ember from 'ember';

export default Ember.Component.extend({
  shareOnFacebookLink: function() {
    let link = this.get('post.link');
    return `https://www.facebook.com/sharer/sharer.php?u=${link}`;
  }.property(''),

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
      post.set('changes', 'user_likes');
      post.toggleProperty('user_likes', true);
      return post.save();
    },
    retweet() {
      let retweeted = this.get('post.retweeted');
      if(!retweeted) {
        this._trackChange('retweeted');
        this.set('post.user_shares', true);
      }
    },

    favorite() {
      this._trackChange('user_likes');
    }
  }
});
