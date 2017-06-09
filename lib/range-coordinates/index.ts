/*
 * Generates an array of LatLong objects covering a min max lat long area
 */

import { LatLong, MinMax } from 'lib/interfaces';

export default function(latMinMax: MinMax, lngMinMax: MinMax, count: number = 10): Array<LatLong> {

  const latRange = latMinMax.max - latMinMax.min;
  const lngRange = lngMinMax.max - lngMinMax.min;

  const coords = [];

  for (let i = 0; i < count; i++) {
    for (let j = 0; j < count; j++) {
      coords.push({
        lat: latMinMax.min + (latRange / count) * j,
        lng: lngMinMax.min + (lngRange / count) * i,
      });
    }
  }

  return coords;
};