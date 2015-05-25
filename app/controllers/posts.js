import Ember from 'ember';

export default Ember.Controller.extend({
  twitter: true,
  facebook: true,

  createPost(message, network) {
    let post = this.store.createRecord('post', {message, network});
    post.save();
  },

  activedNetworks() {
    let networks = ['twitter', 'facebook'];
    return networks.filter((network) => this.get(network));
  },

  actions: {
    newPost() {
      let allNetworks = this.activedNetworks();
      let message = this.get('message');

      allNetworks
        .map(network => this.createPost(message, network));
    },
    toggleNetworkState: function(network) {
      this.toggleProperty(network);
    }
  }
});
