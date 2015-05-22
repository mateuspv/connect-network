import DS from 'ember-data';

export default DS.Model.extend({
  //comments: DS.hasMany('comment'),
  /*changes: DS.attr('string'),
  user_image: DS.attr('string'),
  network: DS.attr('string'),
  video: DS.attr('string'),
  image: DS.attr('string'),
  created_at: DS.attr('string'),
  from: DS.attr('string'),
  from_id: DS.attr('string'),
  message: DS.attr('string'),
  shares_count: DS.attr('string'),
  user_shares: DS.attr('string'),
  likes_count: DS.attr('string'),
  user_likes: DS.attr('boolean'),
  link: DS.attr('string'),*/
  user_facebook: DS.hasMany('user-facebook', {async: false}),
  user_twitter: DS.hasMany('user-twitter', {async: false}),
  page_facebook: DS.hasMany('page-facebook', {async: false}),
  group_facebook: DS.hasMany('group-facebook', {async: false}),
  post_twitter: DS.hasMany('post-twitter', {async: false}),
});
