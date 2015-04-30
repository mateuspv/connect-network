import DS from 'ember-data';

export default DS.Model.extend({
  posts: DS.hasMany('posts'),

  name: DS.attr('string'),
  user_image: DS.attr('string'),
  description: DS.attr('string'),
  link: DS.attr('string'),
  posts_total: DS.attr('string'),
  followers_count: DS.attr('string'),
  friends_count: DS.attr('string'),
  profile_banner_url: DS.attr('string'),
  profile_color: DS.attr('string'),
  network: DS.attr('string'),
});
