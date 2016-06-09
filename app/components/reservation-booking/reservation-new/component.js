import Ember from 'ember';

export default Ember.Component.extend({
  reservation: {},

  actions: {
    submit(reservation) {
      this.sendAction('submit', reservation);
    },
  },
});
