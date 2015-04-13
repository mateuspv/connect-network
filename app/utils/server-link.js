import config from '../config/environment';

/**
 * server-link store functions to talk with server based on config
 */
const APP = config.APP;

function _linkToAuth(link, token) {
  var redirect = APP.URL;
  return `${link}?token=${token}&redirect=${redirect}`;
}

export function authFacebook(token) {
  return _linkToAuth(APP.URL_AUTH_FACEBOOK, token);
}

export function authTwitter(token) {
  return _linkToAuth(APP.URL_AUTH_TWITTER, token);
}

export function userInformations() {
  var URLServer = APP.URL_API;
  return `${URLServer}/api/auth/user`;
}

export function checkAuth(token) {
  var URLServer = APP.URL_API;
  return `${URLServer}/api/auth/status?token=${token}`;
}
