import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    modifyReservation (data) {
      console.log(data);
      // let reservation = this.get('store').createRecord('reservation', data);
      // return reservation.save();
    }
  }
});


// store.findRecord('post', 1).then(function(post) {
//   post.get('title'); // => "Rails is Omakase"
//
//   post.set('title', 'A new post');
//
//   post.save(); // => PATCH to '/posts/1'
// });
