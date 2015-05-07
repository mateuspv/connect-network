import Ember from 'ember';

export default Ember.Mixin.create({
  currentFullPath: '',

  _notifyNewPath() {
    Ember.run.next(() => {
      var url = window.location.href;
      this.set('currentFullPath', url);
    });
  },

  actions: {
    queryParamsDidChange() {
      this._notifyNewPath();
    },

    didTransition() {
      this._notifyNewPath();
    }
  }
});
