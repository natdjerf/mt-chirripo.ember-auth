import Model from 'ember-data/model';
import attr from 'ember-data/attr';


export default Model.extend({
  permit_quantity : attr('number'),
  lodging_quantity : attr('number'),
  permit_start_date : attr('date'),
  permit_end_date : attr('date'),
  total_cost : attr('number')
});
