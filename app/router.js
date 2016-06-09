import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('reservations');
  this.route('reservation', { path: '/reservations/:id' });
  this.route('new');
  this.route('about');
  this.route('weather');
});

export default Router;
