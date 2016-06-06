import Ember from 'ember';

export default Ember.Component.extend({
  form: {},
  actions: {
    submit(reservation) {
      Ember.set(reservation, 'reservation', this.get('user'));
      this.sendAction('submit', this.get('form'));
    },
  },
});

// Set must be called with three or four arguments; an object, a property key, a value and tolerant true/false
