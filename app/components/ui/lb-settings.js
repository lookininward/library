import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  settings: service(),

  form: computed('settings', function() {
    const settings = this.get('settings');

    return {
      showThumbs : settings.get('showThumbs')
    }
  }),

  actions: {
    updateSettings() {
      const settings = this.get('settings');
      const form = this.get('form');

      settings.set('showThumbs', form.showThumbs);
    }
  }
});
