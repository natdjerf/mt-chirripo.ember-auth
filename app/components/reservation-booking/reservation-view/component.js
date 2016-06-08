import Ember from 'ember';

export default Ember.Component.extend({
  canUpdate: false,

  newReservation : {
  totalCost: Ember.computed('permitQuantity', 'lodgingQuantity', 'newReservation.permitStartDate', 'newReservation.permitEndDate', function() {
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
    canUpdate () {
      this.toggleProperty('canUpdate');
    },
    deleteReservation () {
      let reservation = this.get('reservation');
      console.log('delete reservation', reservation);
      this.sendAction('deleteReservation', reservation);
    },
    modifyReservation () {
      let newb = this.get('newReservation');
      Ember.set(newb, 'id', this.get('reservation.id'));
      Ember.set(newb, 'permitQuantity', this.get('permitQuantity'));
      Ember.set(newb, 'lodgingQuantity', this.get('lodgingQuantity'));
      Ember.set(newb, 'permitStartDate', this.get('permitStartDate'));
      Ember.set(newb, 'permitEndDate', this.get('permitEndDate'));
      Ember.set(newb, 'permitQuantity', this.get('permitQuantity'));
      console.log('modify reservation', newb);
      this.sendAction('modifyReservation', newb);
      this.toggleProperty('canUpdate');
    }
  },
});
