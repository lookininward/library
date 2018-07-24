import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),

  model() {
    this.get('store').push({
      data: [
        {
          id: 1,
          type: 'item',
          attributes: {
            title : 'Conquistador',
            subtitle : 'Hernán Cortés, King Montezuma, and the Last Stand of the Aztecs',
            author : 'Buddy Levy',
            cover : 'conquistador.jpg'
          }
        },
        {
          id: 2,
          type: 'item',
          attributes: {
            title : 'East of Eden',
            author : 'John Steinbeck'
          }
        },
        {
          id: 3,
          type: 'item',
          attributes: {
            title : 'The Wise Man\'s Fear',
            author : 'Patrick Rothfuss',
            cover : 'fear.jpg'
          }
        },
        {
          id: 4,
          type: 'item',
          attributes: {
            title : 'Sex at Dawn',
            subtitle : 'The Prehistoric Origins of Modern Sexuality',
            author : 'Christoper Ryan, Cacilda Jethá',
            cover : 'dawn.jpg'
          }
        },
      ]
    });
  },

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
