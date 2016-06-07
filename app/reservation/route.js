import Ember from 'ember';


export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

  model (params) {
    return this.get('store').findRecord('reservation', params.id);
  },

  actions : {
    deleteReservation(data) {
      console.log('reservation route', data);
      data.destroyRecord();
    },
    modifyReservation (data) {
      console.log(this);
      let id = this.context.id;
      let store = this.get('store');
       store.findRecord('reservation', id)
      .then((reservation) => {
        reservation.set = ('reservation.permit_quantity', data.permit_quantity);
        return reservation;
      })
      .then((reservation) => reservation.save())
      .then(() => {
        this.get('flashMessages')
        .success('Your reservation has been updated.');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There seems to be a problem with your request. Please try again');
        });
    }
  }
});
