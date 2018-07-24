import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),

  model(item) {
    this.controllerFor('library').set('viewingItem', true);
    return this.get('store').peekRecord('item', item.item_id);
  }
});
