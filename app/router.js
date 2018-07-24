import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('current');
  this.route('library', function() {
    this.route('item', { path: '/:item_id' });
  });
  this.route('settings');
});

export default Router;
