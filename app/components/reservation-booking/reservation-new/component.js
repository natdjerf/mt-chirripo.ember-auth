import Ember from 'ember';

export default Ember.Component.extend({
  reservation: {
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
    submit(reservation) {
      Ember.set(reservation, 'totalCost', this.get('reservation.totalCost'));
      this.sendAction('submit', reservation);
    },
  },
});
