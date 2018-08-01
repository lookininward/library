import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { task, timeout } from 'ember-concurrency';

export default Route.extend({
  store: service(),

  model() {
    return this.get('store').findAll('item');
  },

  afterModel() {
    this.controllerFor('library').set('isLoading', true);
    this.get('_loading').perform();
  },

  _loading: task(function * () {
    yield timeout(500);
    this.controllerFor('library').set('isLoading', false);
  })
});
