import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createReservation (data) {
      console.log(data);
      let reservation = this.get('store').createRecord('reservation', data);
      return reservation.save();
    }
  }
});
