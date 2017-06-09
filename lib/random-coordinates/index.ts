/*
 * Generates an array of object with random lat long coordinates
 */

import { LatLong } from 'lib/interfaces';

// build random coordinates
function randomCoordinates(): LatLong {
  return {
    lat: randomLatitude(),
    lng: randomLongitude(),
  }
}

// return floating point numbers with fixed decimal count
function randomLatitude() : number {
  return Number((Math.random() * (-90 - 90) + 90).toFixed(5));
}

function randomLongitude() : number {
  return Number((Math.random() * (-180 - 180) + 180).toFixed(5));
}

export default function(): Array<LatLong> {

  const coords = [];

  for (let i = 0; i < 100; i++) {
    coords.push(randomCoordinates());
  }

  return coords;
};