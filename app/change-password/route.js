import Ember from 'ember';

export default Ember.Route.extend({
  auth: Ember.inject.service(),
  flashMessages: Ember.inject.service(),

  activate: function() {
    Ember.$('body').css('background', "url('/images/chirripo-sunset.jpg') no-repeat center center scroll");
    Ember.$('body').css('background-attachment', 'fixed');
    Ember.$('body').css('background-size', 'cover');
    Ember.$('body').append();
  },
  deactivate: function() {
    Ember.$('body').css('background-image', "none");
  },


  actions: {
    changePassword (passwords) {
      this.get('auth').changePassword(passwords)
      .then(() => this.get('auth').signOut())
      .then(() => this.transitionTo('sign-in'))
      .then(() => {
        this.get('flashMessages')
        .success('Successfully changed your password!');
      })
      .then(() => {
        this.get('flashMessages').warning('You have been signed out.');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
  },
});
