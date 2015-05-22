import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user-twitter', {async: false}),
  message: DS.attr('string'),
  created_at: DS.attr('string'),
  favorited: DS.attr('boolean'),
  retweeted: DS.attr('boolean'),
  favorite_count: DS.attr('number'),
  retweet_count: DS.attr('number'),
});
