import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  image: DS.attr('string'),
  cover: DS.attr('string'),
  about: DS.attr('string'),
  link: DS.attr('string'),
});

