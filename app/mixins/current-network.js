import Ember from 'ember';
import currentNetwork from '../utils/current-network';

export default Ember.Mixin.create({
  currentNetwork: '',

  _trackCurrentNetwork: function() {
    var url = this.get('currentFullPath');
    var trackedValue = new currentNetwork(url).network();

    this.set('currentNetwork', trackedValue);
  }.observes('currentFullPath'),
});
