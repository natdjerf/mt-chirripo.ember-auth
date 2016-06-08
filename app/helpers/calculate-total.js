import Ember from 'ember';

export function calculateTotal(params/*, hash*/) {
  let date1 = new Date(params[0]);
  let date2 = new Date(params[1]);
  let numPermits = Math.abs(params[2]);
  let numLodging = Math.abs(params[3]);

  let timeDiff = Math.abs(date2.getTime() - date1.getTime());
  let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  let permitCost = (diffDays + 1) * numPermits * 15;
  let lodgingCost = 0;
  if (numLodging !== 0) {
    lodgingCost = (diffDays * numLodging * 35);
  }

  let totalCost = permitCost + lodgingCost;


  return totalCost;
}

export default Ember.Helper.helper(calculateTotal);
