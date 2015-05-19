import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model(_, transition) {
    let query = transition.queryParams.query;
    let {network, type} = transition.queryParams;
    return this.store.findWithQuery('search', {q: query, network: network, type: type});
  }
});
