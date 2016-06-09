import Ember from 'ember';


export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

  model (params) {
    return this.get('store').findRecord('reservation', params.id);
  },

  actions : {
    deleteReservation(data) {
      data.destroyRecord()
      .then(() => this.transitionTo('application'))
      .then(() => {
        this.get('flashMessages')
        .warning('Your resevation has been cancelled.');
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There seems to be a problem with your request. Please try again');
      });

    },
    modifyReservation (data) {
      let id = this.context.id;
      let store = this.get('store');
       store.findRecord('reservation', id)
      .then((reservation) => {
        reservation.set = ('reservation', data);
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
