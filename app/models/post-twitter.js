import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user-twitter', {async: false}),
  retweet: DS.belongsTo('post-twitter', {async: false}),

  changes: DS.attr('string'),
  message: DS.attr('string'),
  link: DS.attr('string'),
  created_at: DS.attr('date'),
  favorited: DS.attr('boolean'),
  retweeted: DS.attr('boolean'),
  favorite_count: DS.attr('number'),
  retweet_count: DS.attr('number'),
});
