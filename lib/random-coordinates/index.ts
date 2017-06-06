/*
 * Generates an array of object with random lat long coordinates
 */

import { LatLong } from 'lib/interfaces';

class RandomCoordinates {

  coords: Array<LatLong> = []

  constructor() {
    for (let i = 0; i < 100; i++) {
      this.coords.push(this.randomCoordinates());
    }
  }

  // build random coordinates
  randomCoordinates(): LatLong {
    return {
      lat: this.randomLatitude(),
      lng: this.randomLongitude(),
    }
  }

  // return floating point numbers with fixed decimal count
  randomLatitude() : number {
    return Number((Math.random() * (-90 - 90) + 90).toFixed(5));
  }

  randomLongitude() : number {
    return Number((Math.random() * (-180 - 180) + 180).toFixed(5));
  }
}

export default RandomCoordinates;