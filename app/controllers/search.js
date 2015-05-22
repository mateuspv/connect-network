import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['query'],
  query: null,
  isForTwitter: true,
  isForFacebook: true,
  mixed: true,
  recent: false,
  popular: false,
  twitterUser: false,
  facebookUser: true,
  page: false,
  group: false,

  isForNetworks() {
    var network = [];
    if(this.get('isForFacebook')) {
      network.push('facebook');
    }
    if(this.get('isForTwitter')) {
      network.push('twitter');
    }
    return network;
  },

  allTwitterTypes() {
    let types = ['mixed', 'recent', 'popular', 'twitterUser'];
    return types.filter((type) => this.get(type));
  },

  allFacebookTypes() {
    let types = ['facebookUser', 'page', 'group'];
    return types.filter((type) => this.get(type));
  },

  allTypes() {
    return [].concat(this.allFacebookTypes(), this.allTwitterTypes());
  },

  transitionToSearch(query) {
    let network = this.isForNetworks();
    let type = this.allTypes();
    this.transitionToRoute('search.index', {
      queryParams: {
        query: query,
        network: network,
        type: type
      }
    });
  },

  executeQuery() {
    var userQuery = this.get('q');
    this.set('query', userQuery);
    this.transitionToSearch(userQuery);
  },

  actions: {
    search() {
      this.executeQuery();
    }
  }
});
