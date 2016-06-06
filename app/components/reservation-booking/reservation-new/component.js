import Ember from 'ember';

export default Ember.Component.extend({
  form: {},
  actions: {
    submit(reservation) {
      Ember.set(reservation,'reservation', this.get('form'));
      this.sendAction('submit', this.get('form'));
      console.log(reservation);
    },
  },
});
