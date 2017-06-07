import { RequestFormat } from 'lib/interfaces';

import * as moment from 'moment';

/*
 * Sorts list by earliest sunrise, then returns the daylength of the earliest
 */
const EarliestSurniseDayLengthSortFn = (results) => results.sort((a, b) => {
  return moment(a).valueOf() - moment(b).valueOf();
}).map(r => r.results.day_length)[0];

const EarliestSurniseDayLength: RequestFormat = {
  sortResponse: EarliestSurniseDayLengthSortFn
};

/*
 * As wind speeds can diminish after sunset, find the longest day_length in a range of lat lng
 */
const LongestDayInRangeFn = (results) => results.sort((a, b) => {
  return moment(a).valueOf() - moment(b).valueOf();
}).map(r => r.results.day_length)[0];

const LongestDayInRange: RequestFormat = {
  sortResponse: LongestDayInRangeFn
};

export {
  EarliestSurniseDayLength,
  LongestDayInRange,
}