import Ember from 'ember';

export default Ember.Component.extend({
  form: {},

  testComputed: Ember.computed('permit_quantity', 'lodging_quantity', 'permit_start_date', 'permit_end_date', function() {
    let date1 = new Date(this.get('permit_start_date'));
    let date2 = new Date(this.get('permit_end_date'));
    let numPermits = Math.abs(this.get('permit_quantity'));
    let numLodging = Math.abs(this.get('lodging_quantity'));

    let timeDiff = Math.abs(date2.getTime() - date1.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    let permitCost = (diffDays + 1) * numPermits * 15;
    let lodgingCost = 0;
    if (numLodging !== 0) {
      lodgingCost = (diffDays * numLodging * 35);
    }

    let calcualedTotalCost = permitCost + lodgingCost;

    return calcualedTotalCost;
  }),

  actions: {
    submit(reservation) {
      Ember.set(reservation,'reservation', this.get('form'));
      console.log(reservation);
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
      console.log(this.$('.form.total_cost').text());
      console.log(this.testComputed);
      console.log(this.get('testComputed'));





      reservation.totalCost = (this.get('testComputed'));
      this.sendAction('submit', this.get('form'));
      console.log('New reservation:', reservation);



    },
  },
});
