import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    Ember.$('body').css('background', "url('/images/IMG_4941.JPG') no-repeat center center scroll");
    Ember.$('body').css('background-attachment', 'fixed');
    Ember.$('body').css('background-size', 'cover');
    Ember.$('body').append();
  },
  deactivate: function() {
    Ember.$('body').css('background-image', "none");
  },

});
