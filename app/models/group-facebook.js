import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  cover: DS.attr('string'),
  icon: DS.attr('string'),
  description: DS.attr('string'),
  link: DS.attr('string'),
});