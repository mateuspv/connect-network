import Ember from 'ember';

export default Ember.Component.extend({
  linkToLogo: function () {
    var isAuth = this.get('session').get('isAuthenticated');
    return isAuth ? 'posts.index' : 'application';
  }.property('session.isAuthenticated'),

  actions: {
    toggleSidebar() {
      this.sendAction('toggleSidebar');
    }
  }
});
