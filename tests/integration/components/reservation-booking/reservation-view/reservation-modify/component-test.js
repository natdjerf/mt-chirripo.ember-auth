import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('reservation-booking/reservation-view/reservation-modify', 'Integration | Component | reservation booking/reservation view/reservation modify', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{reservation-booking/reservation-view/reservation-modify}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#reservation-booking/reservation-view/reservation-modify}}
      template block text
    {{/reservation-booking/reservation-view/reservation-modify}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
