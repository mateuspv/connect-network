import Ember from 'ember';
import CurrentPage from '../mixins/current-page';
import CurrentNetwork from '../mixins/current-network';

export default Ember.Controller.extend(CurrentNetwork, CurrentPage, {
  actions: {
    toggleSidebar() {
      this.toggleProperty('isDashboardEnabled');
    },

    filterByText(text) {
    },
  }
});
