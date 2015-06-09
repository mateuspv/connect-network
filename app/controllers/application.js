import Ember from 'ember';
import CurrentPage from '../mixins/current-page';
import CurrentNetwork from '../mixins/current-network';

export default Ember.Controller.extend(CurrentNetwork, CurrentPage, {
  currentColor: function () {
    let currentNetwork = this.get('currentNetwork');
    if(currentNetwork === 'facebook') {
      return '#3b5998';
    }
    if(currentNetwork === 'twitter') {
      return '#55acee';
    }
    return '#1E88E2';
  }.property('currentNetwork'),

  actions: {
    toggleSidebar() {
      this.toggleProperty('isDashboardEnabled');
    },
  }
});
