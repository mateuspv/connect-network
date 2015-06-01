import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  renderTemplate(...args) {
    this._super(this, ...args);
    this.render('connect-filters', {
      into: 'application',
      outlet: 'filters',
    });
  },
  model() {
    return this.store.find('post');
  }
});
