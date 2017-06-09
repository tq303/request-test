import { ReqResFormat, LatLong, SunRiseSetResponse } from 'lib/interfaces';

import randomCoordinates from 'lib/random-coordinates';
import rangeCoordintates from 'lib/range-coordinates';

import * as moment from 'moment';

/*
 * Sorts list by earliest sunrise, then returns the daylength of the earliest
 */
const EarliestSurniseDayLengthSortFn = (results) => results.sort((a, b) => {
  return moment(a).valueOf() - moment(b).valueOf();
}).map(r => r.results.day_length)[0];

const EarliestSurniseDayLength: ReqResFormat = {
  batchSize: 5,
  timeout: 5000,
  baseUrl: 'https://api.sunrise-sunset.org/json',
  coordinates: randomCoordinates(),
  results: [],
  sortResponse: EarliestSurniseDayLengthSortFn,
};

/*
 * As wind speeds can diminish after sunset, find the longest day_length in a range of lat lng and return coordinates
 */

// london array lat long coordintates
const minLatLong = {min: 51.3734, max: 51.626};
const maxLatLong = {min: 1.2942, max: 1.495};

const LongestDayInRangeFn = (results) => results.reduce((a, b) => {
  return a.results.day_length > b.results.day_length ? a : b;
}).coords;

const LongestDayInRange: ReqResFormat = {
  batchSize: 5,
  timeout: 5000,
  baseUrl: 'https://api.sunrise-sunset.org/json',
  coordinates: rangeCoordintates(minLatLong, maxLatLong),
  results: [],
  sortResponse: LongestDayInRangeFn,
};

export {
  EarliestSurniseDayLength,
  LongestDayInRange,
}