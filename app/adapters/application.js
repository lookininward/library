import Ember from 'ember';
import DS from 'ember-data';

const { computed } = Ember;

export default DS.JSONAPIAdapter.extend({
  host: computed(function(){
    return 'http://localhost:8000';
  }),

  namespace: 'api'
});
