import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  bio: DS.attr('string'),
  screenname: DS.attr('string'),
  image: DS.attr('string'),
  cover: DS.attr('string'),
  link: DS.attr('string'),
});
