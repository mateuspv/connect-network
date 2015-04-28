import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model(_, transition) {
    var query = transition.queryParams.query;
    return this.store.findWithQuery('search', {q: query});
  }
});
