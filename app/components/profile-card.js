import Ember from 'ember';

export default Ember.Component.extend({
  pathToIcon: function () {
    let network = this.get('network');
    return `svg/${network}.svg`;
  }.property(''),
});
