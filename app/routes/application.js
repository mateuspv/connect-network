import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    toggleSidebar() {
      debugger;
    },

    logout() {
      this.get('session').invalidate();
    }
  }
});
