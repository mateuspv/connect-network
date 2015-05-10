import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  network: DS.attr('string'),
  user_image: DS.attr('string'),
  link: DS.attr('string')
});
