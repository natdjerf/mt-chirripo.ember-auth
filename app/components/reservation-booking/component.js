import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createReservation (reservation) {
      console.log(reservation);
      this.sendAction('createReservation', reservation);
    }
  },
});
