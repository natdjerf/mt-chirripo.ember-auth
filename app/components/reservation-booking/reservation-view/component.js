import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteReservation () {
      let reservation = this.get('reservation');
      console.log('delete reservation', reservation);
      this.sendAction('deleteReservation', reservation);
    },
    modifyReservation () {
      let reservation = this.get('reservation');

      reservation.permit_quantity = this.$('span.permit_quantity').text();
      reservation.lodging_quantity = this.$('span.lodging_quantity').text();
      reservation.permit_start_ = this.$('span.permit_start_date').text();
      reservation.permit_quantity = this.$('span.permit_quantity').text();
      // reservation.total_cost = this.$('span.total_cost').text();
      console.log('modify reservation', reservation);
      this.sendAction('modifyReservation', reservation);
    }
  },
});
