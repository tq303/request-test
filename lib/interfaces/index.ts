interface SunriseInterface {
  results: SunriseResultsInterface
}

interface SunriseResultsInterface {
  sunrise: string
}

interface LatLong {
  lat: number
  lng: number
}

export {
  SunriseInterface,
  LatLong,
};