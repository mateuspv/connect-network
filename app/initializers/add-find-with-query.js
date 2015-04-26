import DS from 'ember-data';
import findWithQuery from 'connect-network/utils/find-with-query';

export function initialize() {
  DS.Store.reopen({
    findWithQuery: function(type, queryParams) {
      return findWithQuery(this, type, queryParams);
    }
  });
}
export default {
  name: 'AddFindWithQueryToStore',
  initialize: initialize
};
