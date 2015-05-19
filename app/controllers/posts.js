import Ember from 'ember';

export default Ember.Controller.extend({
  isForTwitter: true,
  isForFacebook: true,

  createPost(message, network) {
    let post = this.store.createRecord('post', {
      message: message,
      network: network,
    });
    post.save();
  },

  actions: {
    newPost() {
      let isForTwitter = this.get('isForTwitter') ? 'twitter' : undefined;
      let isForFacebook = this.get('isForFacebook') ? 'facebook' : undefined;
      let allNetworks = [isForTwitter, isForFacebook];
      let message = this.get('message');

      allNetworks
        .filter(network => network)
        .map(network => this.createPost(message, network));
    }
  }
});
