import DS from 'ember-data';

export default DS.Model.extend({
  //comments: DS.hasMany('comment'),

  network: DS.attr('string'),
  video: DS.attr('string'),
  image: DS.attr('string'),
  created_at: DS.attr('string'),
  from: DS.attr('string'),
  message: DS.attr('string'),
  shares_count: DS.attr('string'),
  user_shares: DS.attr('string'),
  likes_count: DS.attr('string'),
  user_likes: DS.attr('string'),
});
