import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createReservation (reservation) {
      this.sendAction('createReservation', reservation);
    }
  },
});
