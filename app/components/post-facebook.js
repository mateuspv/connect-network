import Ember from 'ember';

const MESSAGE_LIMIT = 140;
const PREVIEW_BUTTON = {show: 'show more', hide:'show less'};

export default Ember.Component.extend({
  shouldDisplayFullMessage: false,

  displayMessage: function() {
    let message = this.get('post.message');

    if(!message) {
      return;
    }

    if(this._shouldDisplayFullMessage()) {
      return message;
    }

    let limitedMessage = message.slice(0, MESSAGE_LIMIT);

    return `${limitedMessage}...`
  }.property('shouldDisplayFullMessage'),

  // better create a pluralizer
  likeText: function () {
    let isLiked = this.get('post.like');
    return isLiked ? 'liked' : 'like';

  }.property('post.like'),

  toggleMessageText: function() {
    if(this.get('shouldDisplayFullMessage')) {
      return PREVIEW_BUTTON.hide;
    }

    return PREVIEW_BUTTON.show;
  }.property('shouldDisplayFullMessage'),

  _shouldDisplayFullMessage() {
    let shouldDisplayFullMessage = this.get('shouldDisplayFullMessage');
    let message = this.get('post.message');

    return shouldDisplayFullMessage || message > MESSAGE_LIMIT;
  },

  actions: {
    toggleMessagePreview() {
      this.toggleProperty('shouldDisplayFullMessage');
    },

    like() {
      var post = this.get('post');
      post.set('changes', 'like');
      post.toggleProperty('like');
      return post.save();
    }
  }
});
