// import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
import DS from 'ember-data';

export default DS.Model.extend({
  permitQuantity : DS.attr('number'),
  lodgingQuantity : DS.attr('number'),
  permitStartDate : DS.attr('string', {
    defaultValue() { return new Date(); }
  }),
  permitEndDate : DS.attr('string', {
    defaultValue() { return new Date(); }
  }),
  totalCost : DS.attr('number')

});
