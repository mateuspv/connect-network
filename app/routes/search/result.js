import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend({
  model(_, transition) {
    let {network, type, q} = transition.queryParams;
    let options = {q, network, type};
    return this.store.findWithQuery('search', options);
  }
});
