import Ember from 'ember';

export function profileBanner(banner) {
  return (`background: url(${banner})`).htmlSafe();
}

export default Ember.HTMLBars.makeBoundHelper(profileBanner);
