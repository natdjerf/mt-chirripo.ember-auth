import Ember from 'ember';

export default Ember.Component.extend({
  canUpdate: false,

  actions: {
    canUpdate() {
      this.toggleProperty('canUpdate');
    },
    deleteReservation() {
      let reservation = this.get('reservation');
      console.log('delete reservation', reservation);
      this.sendAction('deleteReservation', reservation);
    },
    modifyReservation(newReservation) {
      this.sendAction('modifyReservation', newReservation);
      console.log(newReservation);
      this.toggleProperty('canUpdate');
    }
  },
});
