import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(route) {
    return this.store.find('profile', {
      id: route.id,
      network: route.network
    });
  }
});
