import DS from 'ember-data';

export default DS.Model.extend({
  permitQuantity: DS.attr('number'),
  lodgingQuantity: DS.attr('number'),
  permitStartDate: DS.attr('date', {
    defaultValue() {
      return new Date();
    }
  }),
  permitEndDate: DS.attr('date', {
    defaultValue() {
      return new Date();
    }
  }),
  totalCost: DS.attr('number')
});
