import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('reservation-booking/reservations-all', 'Integration | Component | reservation booking/reservations all', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{reservation-booking/reservations-all}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#reservation-booking/reservations-all}}
      template block text
    {{/reservation-booking/reservations-all}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
