import ApplicationAdapter from './application';
import config from '../config/environment';

export default ApplicationAdapter.extend({
  namespace: 'api/connect',
  host: config.APP.URL_API,

  pathForType(type) {
    return type;
  }
});
