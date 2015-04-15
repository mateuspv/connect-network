import Ember from 'ember';
import CurrentPage from '../mixins/current-page';

export default Ember.Controller.extend(CurrentPage, {
  actions: {
    filterByText(text) {
    }
  }
});
