import Route from '@ember/routing/route';

export default Route.extend({
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
