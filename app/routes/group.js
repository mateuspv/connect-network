import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let store = this.get('store');
    let {id} = params;
    let group = store.fetchById('group-facebook', id);
    return group;
  }
});
