import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),
  activate: function() {
    Ember.$('body').css('background', "url('images/chirripo-sunset.jpg') no-repeat center center scroll");
    Ember.$('body').css('background-attachment', 'fixed');
    Ember.$('body').css('background-size', 'cover');
    Ember.$('body').append();
  },
  deactivate: function() {
    Ember.$('body').css('background-image', "none");
  },

  actions: {
    signIn (credentials) {
      return this.get('auth').signIn(credentials)
      .then(() => this.transitionTo('application'))
      .then(() => this.get('flashMessages').success('Thanks for signing in!'))
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
  },
});
