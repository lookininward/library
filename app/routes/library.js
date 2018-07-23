import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        'id': 1,
        'title' : 'Conquistador',
        'subtitle' : 'Hernán Cortés, King Montezuma, and the Last Stand of the Aztecs',
        'author' : 'Buddy Levy'
      },
      {
        'id': 2,
        'title' : 'East of Eden',
        'author' : 'John Steinbeck'
      }
    ]
  }
});
