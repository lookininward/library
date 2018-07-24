import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    // Set library controller viewingItem to true
    this.controllerFor('library').set('viewingItem', true);

    // Get item model id
    // Query store
    // return item
  }
});
