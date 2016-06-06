import Ember from 'ember';

export default Ember.Component.extend({
  form: {},
  actions: {
    submit(reservation) {
      // Ember.set(reservation, 'reservation', this.get('user'));
      // console.log(reservation);
      // this.sendAction('submit', this.get('form'));
      Ember.set(reservation,'reservation', this.get('form'));
      this.sendAction('submit', this.get('form'));
      console.log(reservation);
    },
  },
});

// Set must be called with three or four arguments; an object, a property key, a value and tolerant true/false
