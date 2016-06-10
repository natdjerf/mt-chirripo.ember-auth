import Ember from 'ember';

export default Ember.Route.extend({
  activate: function() {
    Ember.$('body').css('background', "url('/images/IMG_4941.JPG') no-repeat center center scroll");
    Ember.$('body').css('background-attachment', 'fixed');
    Ember.$('body').css('background-size', 'cover');
    Ember.$('.navbar-default .navbar-nav > li > a').css('color', 'white');
    Ember.$('body').append();
  },
  deactivate: function() {
    Ember.$('body').css('background-image', "none");
    Ember.$('.navbar-default .navbar-nav > li > a').css('color', '#12772A');
  },

});
