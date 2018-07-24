import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  settings: service(),

  actions: {

    // Settings ---------------------------------------------------------------
    toggleThumbnails() {
      const settings = this.get('settings');
      settings.toggleProperty('showThumbs');
    }
  }
});