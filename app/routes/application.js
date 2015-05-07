import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import CurrentFullPathMixin from '../mixins/current-full-path';

export default Ember.Route.extend(ApplicationRouteMixin, CurrentFullPathMixin, {
  notifyApplicationController: function() {
    var applicationCtrl = this.controllerFor('application');
    var currentFullPath = this.get('currentFullPath');

    applicationCtrl.set('currentFullPath', currentFullPath);
  }.observes('currentFullPath'),

  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
