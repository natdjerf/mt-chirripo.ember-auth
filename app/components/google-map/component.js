import Ember from 'ember';

export default Ember.Component.extend({
  id: 'map-canvas',
  tagName: 'div',

  attributeBindings: ['style'],
  style:"height: 200px; ",

  map:null,

  didInsertElement: function() {
    var mapOptions = {
      center: new google.maps.LatLng(9.4845506, -83.6286731),
      zoom: 9,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(this.$().get(0),mapOptions);
    this.set("map",map);
  }
});
