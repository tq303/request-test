import * as moment from 'moment';

interface SunRiseSetResponse {
  results: {
    sunrise: string
    sunset: string
    solar_noon: string
    day_length: string
    civil_twilight_begin: string
    civil_twilight_end: string
    nautical_twilight_begin: string
    nautical_twilight_end: string
    astronomical_twilight_begin: string
    astronomical_twilight_end: string
  };
  status: string;
}

interface FormattedResponse extends SunRiseSetResponse {
  coords: Array<LatLong>
}

interface LatLong {
  lat: number
  lng: number
}

interface RequestFormatFn {
  (r: Array<SunRiseSetResponse>): any
}

interface RequestFormat {
  sortResponse: RequestFormatFn;
}

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
const LongestDayLengthInRange = (results) => results.sort((a, b) => {
  return moment(a).valueOf() - moment(b).valueOf();
}).map(r => r.results.day_length)[0];

const LongestDayInRange: RequestFormat = {
  sortResponse: LongestDayLengthInRange
};

export {
  RequestFormat,
  SunRiseSetResponse,
  LatLong,
  EarliestSurniseDayLength,
  LongestDayInRange,
  FormattedResponse
};