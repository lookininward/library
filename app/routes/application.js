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
            cover : 'conquistador.jpg',
            description: 'It was a moment unique in human history, the face-to-face meeting between two men from civilizations a world apart. In 1519, Hernán Cortés arrived on the shores of Mexico, determined not only to expand the Spanish empire but to convert the natives to Catholicism and carry off a fortune in gold. That he saw nothing paradoxical in carrying out his intentions by virtually annihilating a proud and accomplished native people is one of the most remarkable and tragic aspects of this unforgettable story. In Tenochtitlán Cortés met his Aztec counterpart, Montezuma: king, divinity, commander of the most powerful military machine in the Americas and ruler of a city whose splendor equaled anything in Europe. Yet in less than two years, Cortés defeated the entire Aztec nation in one of the most astounding battles ever waged. The story of a lost kingdom, a relentless conqueror, and a doomed warrior, Conquistador is history at its most riveting.'
          }
        },
        {
          id: 2,
          type: 'item',
          attributes: {
            title : 'East of Eden',
            author : 'John Steinbeck',
            description: 'In his journal, Nobel Prize winner John Steinbeck called East of Eden "the first book," and indeed it has the primordial power and simplicity of myth. Set in the rich farmland of California\'s Salinas Valley, this sprawling and often brutal novel follows the intertwined destinies of two families—the Trasks and the Hamiltons—whose generations helplessly reenact the fall of Adam and Eve and the poisonous rivalry of Cain and Abel.'
          }
        },
        {
          id: 3,
          type: 'item',
          attributes: {
            title : 'The Wise Man\'s Fear',
            author : 'Patrick Rothfuss',
            cover : 'fear.jpg',
            description: 'In The Wise Man\'s Fear, Kvothe searches for answers, attempting to uncover the truth about the mysterious Amyr, the Chandrian, and the death of his parents. Along the way, Kvothe is put on trial by the legendary Adem mercenaries, forced to reclaim the honor of his family, and travels into the Fae realm. There he meets Felurian, the faerie woman no man can resist, and who no man has ever survived...until Kvothe. Now, Kvothe takes his first steps on the path of the hero and learns how difficult life can be when a man becomes a legend in his own time.'
          }
        },
        {
          id: 4,
          type: 'item',
          attributes: {
            title : 'Sex at Dawn',
            subtitle : 'The Prehistoric Origins of Modern Sexuality',
            author : 'Christoper Ryan, Cacilda Jethá',
            cover : 'dawn.jpg',
            description: 'A controversial, idea-driven book that challenges everything you (think you) know about sex, monogamy, marriage, and family. In the words of Steve Taylor (The Fall, Waking From Sleep), Sex at Dawn is “a wonderfully provocative and well-written book which completely re-evaluates human sexual behavior and gets to the root of many of our social and psychological ills.”'
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
