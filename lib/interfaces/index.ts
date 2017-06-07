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

interface LatLong {
  lat: number
  lng: number
}

interface RequestFormatFn {
  (r: Array<SunRiseSetResponse>): any
}

interface RequestFormat {
  format: RequestFormatFn;
}

/*
 * Sorts list by earliest sunrise, then returns the daylength of the earliest
 */
const EarliestSurniseDayLengthSortFn = (results) => results.sort((a, b) => {
  return moment(a, 'hh:mm:ss A').valueOf() - moment(b, 'hh:mm:ss A').valueOf();
}).map(r => r.results.day_length)[0];

const EarliestSurniseDayLength: RequestFormat = {
  format: EarliestSurniseDayLengthSortFn
};

/*
 * 
 */

export {
  RequestFormat,
  SunRiseSetResponse,
  LatLong,
  EarliestSurniseDayLength
};