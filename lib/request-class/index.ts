import * as request from 'request-promise-native';

import randomCoordinates from 'lib/random-coordinates';

import { LatLong } from 'lib/interfaces';

export default class RequestClass {

  batchSize: number = 5
  timeout: number = 5000
  baseUrl: string = 'https://api.sunrise-sunset.org/json'
  coordinates: Array<LatLong>

  constructor() {
    const rc = new randomCoordinates();

    this.coordinates = rc.coords;
  }

  async getBatch() {
    return await this.parallelRequest(this.coordinates.splice(0, this.batchSize));
  }

  async reduce() {
    try {

      while (this.coordinates.length > 0) {
        return await this.getBatch().then(r => new Promise<any[]>(resolve => setTimeout(resolve(r), this.timeout)));
      }

    } catch(e) {
      return e;
    }
  }

  async get(coords) {
    return request({
      url: this.baseUrl,
      qs: coords,
      json: true
    }).then(this.returnFormat);
  }

  parallelRequest(coords: Array<LatLong>): Promise<any[]> {
    return Promise.all(coords.map(r => this.get(r)));
  }

  returnFormat(r: any): string {
    return r.results.sunrise;
  }

};