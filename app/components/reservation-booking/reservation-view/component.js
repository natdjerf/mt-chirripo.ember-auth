import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteReservation () {
      this.get('reservation').destroyRecord();
    },
    modifyReservation () {
      let reservation = {};
      reservation.permit_quantity = this.$('span.permit_quantity').text();
      reservation.lodging_quantity = this.$('span.lodging_quantity').text();
      reservation.permit_start_ = this.$('span.permit_quantity').text();
      reservation.permit_quantity = this.$('span.permit_quantity').text();
      reservation.total_cost = this.$('span.total_cost').text();
      console.log(reservation);
    }
  },
});
