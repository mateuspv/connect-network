import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['query'],
  query: null,

  transitionToSearch(query) {
    this.transitionToRoute('search.index', {
      queryParams: {
        query: query
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
