import Ember from 'ember';

export default Ember.Component.extend({
  id: 'map-canvas',
  tagName: 'div',

  attributeBindings: ['style'],
  style:"height: 350px; width: 100%;",

  map:null,

  didInsertElement: function() {
    let myLatLng = {lat: 9.5011288, lng: -83.6554445};
    let mapOptions = {
      center: myLatLng,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    let marker = new google.maps.Marker({
      position: myLatLng,
});

    let map = new google.maps.Map(this.$().get(0),mapOptions);
    this.set("map",map);
    marker.setMap(map);
  }
});

// export default Ember.Component.extend({
//   id: 'map-canvas',
//     // let container = this.$('.map-canvas')[0];
//     insertMap: function() {
//         let options = {
//             center: new window.google.maps.LatLng(
//                 this.get('latitude'),
//                 this.get('longitude')
//             ),
//             zoom: 15
//         };
//         new window.google.maps.Map(this.$().get(0), options);
//     }.on('didInsertElement')
// });
