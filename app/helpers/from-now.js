import Ember from 'ember';

export function fromNow(date) {
  var systemDate = new Date(Date.parse(date));
  var now = new Date();
  var diff = Math.floor((now - systemDate) / 1000);

  if (diff <= 1) {
    return 'just now';
  }

  if (diff < 20) {
    return `there are ${diff} seconds`;
  }

  if (diff < 40) {
    return 'there is a minute';
  }

  if (diff < 60) {
    return 'less than a minute ago';
  }

  if (diff <= 90) {
    return 'a minute';
  }

  if (diff <= 3540) {
    let minutes = diff.toString().substring(0, 2);
    return `${minutes} minutes`;
  }

  if (diff <= 5400) {
    return '1 hour ago';
  }

  if (diff <= 86400) {
    let hours = Math.round(diff / 3600);
    return `${hours} hours ago`;
  }

  if (diff <= 129600) {
    return 'one day ago';
  }

  if (diff < 604800) {
    let days = Math.round(diff / 86400);
    return `${days} days`;
  }

  if (diff <= 777600) {
    return '1 week ago';
  }

  return systemDate;
}

export default Ember.HTMLBars.makeBoundHelper(fromNow);
