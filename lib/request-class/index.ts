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
    try {

      while (this.coordinates.length > 0) {
        const batch = await this.getBatch(this.coordinates.splice(0, this.batchSize)).then;
        batch(r => new Promise(resolve => setTimeout(resolve(this.results.concat(...r)), this.timeout)));
      }

      return this.rf.postFormat(this.results);

    } catch(e) {
      return e;
    }
  }

  async get(coords: LatLong): Promise<any> {
    return request({
      url: this.baseUrl,
      qs: coords,
      json: true
    })
    .then(this.rf.format);
  }

};