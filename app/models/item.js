import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  subtitle: DS.attr(),
  author: DS.attr(),
  cover: DS.attr()
});
