// import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
import DS from 'ember-data';


export default DS.Model.extend({
  permit_quantity : DS.attr('number'),
  lodging_quantity : DS.attr('number'),
  permit_start_date : DS.attr('string', {
    defaultValue() { return new Date(); }
  }),
  permit_end_date : DS.attr('date'),
  total_cost : DS.attr('number')
});
