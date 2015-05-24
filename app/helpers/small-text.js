import Ember from 'ember';

export function smallText(params/*, hash*/) {
  const MAX_LENGTH = 140;
  const LIMIT_CHAR = '...';
  let description = params[0];

  if(!description) {
    return;
  }

  if(description.length < MAX_LENGTH) {
    return description;
  }

  let newDescription = description.slice(0, MAX_LENGTH);
  return `${newDescription}${LIMIT_CHAR}`;
}

export default Ember.HTMLBars.makeBoundHelper(smallText);
