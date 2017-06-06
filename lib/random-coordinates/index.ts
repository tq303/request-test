/*
 * Generates an array of object with random lat long coordinates
 */

export default () => {

  const randomLatLong = [];

  for (let i = 0; i < 100; i++) {
    randomLatLong.push({
      lat: randomLatitude(),
      lng: randomLongitude(),
    });
  }

  return randomLatLong;

};

// return floating point numbers with fixed decimal count
function randomLatitude() : number {
  return Number((Math.random() * (-90 - 90) + 90).toFixed(5));
}

function randomLongitude() : number {
  return Number((Math.random() * (-180 - 180) + 180).toFixed(5));
}