import CustomAuthorizer from '../authorizers/custom';

export default {
  name: 'authentication',
  before: 'simple-auth',
  initialize(container, application) {
    application.register('authorizer:custom', CustomAuthorizer);
  }
};
