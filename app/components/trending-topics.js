import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  hashtags: [],

  init(){
    this._super();
    this.hashModel();
  },

  hashModel() {
    let store = this.get('store');
    store.find('hashtag')
      .then(this._handleStore.bind(this));
  },

  _handleStore(response) {
    let list = this._extractHashList(response);
    let data = this._extractHashNames(list);
    this.set('hashtags', data);
  },

  _extractHashList(hashtag) {
    return hashtag.get('content');
  },

  _extractHashNames(hashlist) {
    return hashlist.map(hash => hash.get('hashtag'));
  },
});
