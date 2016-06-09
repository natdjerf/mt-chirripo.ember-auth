import Ember from 'ember';

export default Ember.Route.extend({
  activate: function(){
      $('body').css('background', "url('https://c4.staticflickr.com/1/685/22639053571_7680688325_k.jpg') no-repeat center center scroll");
      $('body').css('background-attachment', 'fixed');
      $('body').css('background-size', 'cover');
      Ember.$('body').append();
    },
deactivate: function(){
      $('body').css('background-image', "none");
    }
});
