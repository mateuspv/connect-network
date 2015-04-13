import Ember from 'ember';
import CssCurrentPath from '../utils/css-current-page';

export default Ember.Mixin.create({
  currentPage: '',

  _notifyCurrentPath: function() {
    var currentPath = this.get('currentPath');
    var cssPath = new CssCurrentPath(currentPath);
    var result = cssPath.path();
    this.set('currentPage', result);
  }.observes('currentPath'),
});
