import Ember from 'ember';

export default Ember.Component.extend({
  dispatchFilterText: function () {
    var text = this.get('findWithMessage');
    this.get('targetObject').send('filterByText', text);
  }.observes('findWithMessage'),
  actions: {
    logout() {
      this.sendAction('logout');
    }
  }
});
