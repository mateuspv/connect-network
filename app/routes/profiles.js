import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(_, transition) {
    return this.store.find('profile', {
      id: 1,
      network: 'facebook'
    });
  }
});
