import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        'id': 1,
        'title' : 'Conquistador',
        'subtitle' : 'Hernán Cortés, King Montezuma, and the Last Stand of the Aztecs',
        'author' : 'Buddy Levy',
        'cover' : 'conquistador.jpg'
      },
      {
        'id': 2,
        'title' : 'East of Eden',
        'author' : 'John Steinbeck'
      },
      {
        'id': 3,
        'title' : 'The Wise Man\'s Fear',
        'author' : 'Patrick Rothfuss',
        'cover' : 'fear.jpg'
      },
      {
        'id': 4,
        'title' : 'Sex at Dawn',
        'subtitle' : 'The Prehistoric Origins of Modern Sexuality',
        'author' : 'Christoper Ryan, Cacilda Jethá',
        'cover' : 'dawn.jpg'
      },
    ]
  }
});
