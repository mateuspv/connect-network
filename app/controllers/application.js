import Ember from 'ember';
import CurrentPage from '../mixins/current-page';

export default Ember.Controller.extend(CurrentPage, {
  actions: {
    toggleSidebar() {
      this.toggleProperty('isDashboardEnabled');
    },

    filterByText(text) {
    }
  }
});
