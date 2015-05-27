import DS from 'ember-data';
let {attr} = DS;

export default DS.Model.extend({
  owner: DS.belongsTo('user-facebook', {async: false}),
  link: attr('string'),
  story: attr('string'),
  picture: attr('string'),
  description: attr('string'),
  external_link: attr('string'),
  type: attr('string'),
  message: attr('string'),
  created_time: attr('date'),
  like: attr('boolean'),
  changes: attr('string'),
});
