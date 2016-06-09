import Ember from 'ember';

export default Ember.Component.extend({
  canUpdate: false,

  newReservation: {
    totalCost: Ember.computed('permitQuantity', 'lodgingQuantity', 'permitStartDate', 'permitEndDate', function() {
      let numPermits = Math.abs(Ember.get(this, 'permitQuantity'));
      let numLodging = Math.abs(Ember.get(this, 'lodgingQuantity'));
      let date1 = new Date(Ember.get(this, 'permitStartDate'));
      let date2 = new Date(Ember.get(this, 'permitEndDate'));

      let timeDiff = Math.abs(date2.getTime() - date1.getTime());
      let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

      let permitCost = (diffDays + 1) * numPermits * 15;
      let lodgingCost = 0;
      if (numLodging !== 0) {
        lodgingCost = (diffDays * numLodging * 35);
      }

      let calcualedTotalCost = (permitCost + lodgingCost);

      return calcualedTotalCost;
    }),
  },

  actions: {
    canUpdate() {
      this.toggleProperty('canUpdate');
    },
    deleteReservation() {
      let reservation = this.get('reservation');
      console.log('delete reservation', reservation);
      this.sendAction('deleteReservation', reservation);
    },
    modifyReservation() {
      let reservation = this.get('newReservation');
      Ember.set(this.reservation, 'id', this.get('reservation.id'));
      Ember.set(this.reservation, 'permitQuantity', this.get('permitQuantity'));
      Ember.set(this.reservation, 'lodgingQuantity', this.get('lodgingQuantity'));
      Ember.set(this.reservation, 'permitStartDate', this.get('permitStartDate'));
      Ember.set(this.reservation, 'permitEndDate', this.get('permitEndDate'));
      // Ember.set(this.reservation, 'totalCost', this.get('totalCost'));

      Ember.set(this.reservation, 'totalCost', this.get('newReservation.totalCost'));

      this.sendAction('modifyReservation', reservation);
      this.toggleProperty('canUpdate');
    }
  },
});
