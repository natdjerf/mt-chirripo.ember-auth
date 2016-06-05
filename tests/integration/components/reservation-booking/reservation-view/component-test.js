import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('reservation-booking/reservation-view', 'Integration | Component | reservation booking/reservation view', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{reservation-booking/reservation-view}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#reservation-booking/reservation-view}}
      template block text
    {{/reservation-booking/reservation-view}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
