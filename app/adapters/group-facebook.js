import config from '../config/environment';

export default DS.RESTAdapter.extend({
  namespace: 'api/connect',
  host: config.APP.URL_API,
  pathForType() {
    return 'groups';
  }
});
