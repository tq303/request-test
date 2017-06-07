import * as request from 'request-promise-native';

import randomCoordinates from 'lib/random-coordinates';

import { LatLong, SunRiseSetResponse, RequestFormat } from 'lib/interfaces';

export default class RequestClass {

  batchSize: number = 5
  timeout: number = 5000
  baseUrl: string = 'https://api.sunrise-sunset.org/json'
  coordinates: Array<LatLong>
  rf: RequestFormat
  results: Array<any> = []

  constructor(rf: RequestFormat) {
    const rc = new randomCoordinates();

    this.coordinates = rc.coords;

    this.rf = rf;
  }

  getBatch(batch: Array<LatLong>): Promise<SunRiseSetResponse[]> {
    return Promise.all(batch.map((c) => this.get(c)));
  }

  async reduce() {

    console.log('requesting all coordinates');

    try {

      while (this.coordinates.length > 0) {
        await this.getBatch(this.coordinates.splice(0, this.batchSize)).then(r => new Promise(resolve => setTimeout(resolve(this.results.push(...r)), this.timeout)));
        console.log(`retrieved ${this.results.length}`);
      }

      console.log('formatting results');

      return this.rf.format(this.results);

    } catch(e) {
      return e;
    }
  }

  async get(coords: LatLong): Promise<any> {
    return request({
      url: this.baseUrl,
      qs: {
        ...coords,
        formatted: 0
      },
      json: true
    })
    .then((r) => { r.coords = coords; return r });
  }

};