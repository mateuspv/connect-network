import Ember from 'ember';
const TWITTER_TYPES = ['mixed', 'recent', 'popular', 'twitterUser'];
const FACEBOOK_TYPES = ['facebookUser', 'page', 'group'];
const NETWORKS = ['facebook', 'twitter'];
let Query = Ember.Object.create({
  twitter: true,
  facebook: true,
  mixed: false,
  recent: false,
  popular: false,
  twitterUser: true,
  facebookUser: true,
  page: false,
  group: false,
  types() {
    let facebook = this._allFacebookTypes()
    let twitter = this._allTwitterTypes();
    return [].concat(facebook, twitter);
  },
  networks() {
    return NETWORKS.filter(this._isActive.bind(this));
  },

  _allTwitterTypes() {
    return TWITTER_TYPES.filter(this._isActive.bind(this));
  },

  _allFacebookTypes() {
    return FACEBOOK_TYPES.filter(this._isActive.bind(this));
  },
  _isActive(type) {
    return this.get(type);
  }
});

export default Ember.Controller.extend({
  queryParams: ['q'],
  q: null,
  query: Query,
  transitionToSearch() {
    let q = this.get('q');
    let network = this.query.networks();
    let type = this.query.types();
    let queryParams = {q, network, type};

    return this.transitionToRoute('search.result', { queryParams });
  },

  actions: {
    doSearch() {
      this.transitionToSearch();
    },

    toggleProperty(name) {
      this.query.toggleProperty(name);
    }
  },
});
