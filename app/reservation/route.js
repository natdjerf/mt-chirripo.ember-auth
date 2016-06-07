import Ember from 'ember';


export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('reservation', params.id);
  },
  actions : {
    deleteReservation(data) {
      console.log('reservation route', data);
    },
    modifyReservation (data) {
      console.log('reservation route', data);
      // let id = this.get('reserver.id');
      // let store = this.get('store');
      //
      // let reservation = this.get('store').createRecord('reservation', data);
      // return reservation.save();
    }
  }
});
