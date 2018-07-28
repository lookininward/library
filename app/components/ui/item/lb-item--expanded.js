import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  isEditing: false,

  itemData: computed('item', function() {
    return {
      'title' : this.get('item.title'),
      'subtitle' : this.get('item.subtitle'),
      'author' : this.get('item.author'),
      'description' : this.get('item.description')
    }
  }),

  actions: {
    toggleEdit() {
      this.toggleProperty('isEditing');
    },

    saveChanges(form) {
      const item = this.get('item');
      const itemData = this.get('itemData');

      item.set('title', itemData.title);
      item.save();
    },

    readItem() {
      const item = this.get('item');
      console.log('Reading item...');
      // set as current on library controller
    }
  }
});
