import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createReservation(data) {
      console.log('create action', data);
      let reservation = this.get('store').createRecord('reservation', data);
      return reservation.save()
        .then(() => this.transitionTo('reservations'))
        .then(() => {
          this.get('flashMessages')
            .success('Your reservation has been saved');
        })
        .catch(() => {
          this.get('flashMessages')
            .danger('There seems to be a problem with your request. Please try again');
        });
    }
  }
});
