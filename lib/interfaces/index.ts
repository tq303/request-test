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

interface RequestFormat {
  postFormat(r: any): any;
}

export {
  RequestFormat,
  SunRiseSetResponse,
  LatLong,
};