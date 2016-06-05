import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('reservation', params.id);
  },

  actions: {
    createReservation (data) {
      let reservation = this.get('store').createRecord('reservation', data);
      return reservation.save();
    }
  }
});
