import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),

  redirect() {
    this.transitionTo('library');
  },

  actions: {
    transitionTo(path) {
      this.controllerFor('library').set('viewingItem', false);
      this.transitionTo(path);
    }
  }
});
