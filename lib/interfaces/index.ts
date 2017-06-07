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

export {
  RequestFormat,
  SunRiseSetResponse,
  LatLong,  
  FormattedResponse
};