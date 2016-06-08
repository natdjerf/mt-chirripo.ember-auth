import Ember from 'ember';

export default Ember.Component.extend({
  form: {},

  computedTotal: Ember.computed('form.permit_quantity', 'form.lodging_quantity', 'form.permit_start_date', 'form.permit_end_date', function() {
    let date1 = new Date(this.get('form.permit_start_date'));
    let date2 = new Date(this.get('form.permit_end_date'));
    let numPermits = Math.abs(this.get('form.permit_quantity'));
    let numLodging = Math.abs(this.get('form.lodging_quantity'));

    let timeDiff = Math.abs(date2.getTime() - date1.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    let permitCost = (diffDays + 1) * numPermits * 15;
    let lodgingCost = 0;
    if (numLodging !== 0) {
      lodgingCost = (diffDays * numLodging * 35);
    }

    let calcualedTotalCost = Math.abs(permitCost + lodgingCost);

    return calcualedTotalCost;
  }),

  actions: {
    submit(reservation) {
      Ember.set(reservation,'reservation', this.get('form'));
      // .then((reservation) => {
      // reservation.total_cost.set = ('reservation', this.get('test'));
      // reservation.set = ('reservation.lodging_quantity', data.permit_quantity);
      // reservation.set = ('reservation.permit_quantity', data.permit_quantity);
      // reservation.set = ('reservation.permit_quantity', data.permit_quantity);
      // reservation.set = ('reservation.permit_quantity', data.permit_quantity);
      //   return reservation;
      // })
      // .then((reservation) => reservation.save())
      // .then(() => {
      //   this.get('flashMessages')
      //   .success('Your reservation has been updated.');
      // })
      // .catch(() => {
      //   this.get('flashMessages')
      //   .danger('There seems to be a problem with your request. Please try again');
      //   });
      // console.log(this.testComputed);
      // console.log(this.get('testComputed'));
      reservation.totalCost = (this.get('computedTotal'));
      this.sendAction('submit', reservation);
      console.log('New reservation:', reservation);



    },
  },
});
