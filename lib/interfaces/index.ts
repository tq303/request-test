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
  }
  status: string
}

interface FormattedResponse extends SunRiseSetResponse {
  coords: Array<LatLong>
}

interface LatLong {
  lat: number
  lng: number
}

interface ReqResFormatFn {
  (r: Array<SunRiseSetResponse>): any
}

interface ReqResFormat {
  batchSize: number
  timeout: number
  baseUrl: string
  coordinates: Array<LatLong>
  results: Array<SunRiseSetResponse>
  sortResponse: ReqResFormatFn
}

interface MinMax {
  min: number,
  max: number
}

export {
  ReqResFormat,
  SunRiseSetResponse,
  LatLong,  
  FormattedResponse,
  MinMax,
};