import * as request from 'request-promise-native';

import randomCoordinates from 'lib/random-coordinates';

export default class RequestClass {

  batchSize: number = 5
  timeout: number = 5000
  baseUrl: string = 'https://api.sunrise-sunset.org/json'
  randomCoordinates: Array<any> = randomCoordinates()

  async get() {
    return await this.parallelRequest(this.randomCoordinates.splice(0, this.batchSize));
  }

  async reduce() {
    try {

      while (this.randomCoordinates.length > 0) {
        return await this.get().then(r => new Promise<any[]>(resolve => setTimeout(resolve(r), this.timeout)));
      }

    } catch(e) {
      return e;
    }
  }

  parallelRequest(coords: Array<any>): Promise<any[]> {

    return Promise.all(coords.map((c) => request({
      url: this.baseUrl,
      qs: c,
      json: true
    }).then(this.returnFormat)));

  }

  returnFormat<T>(r: T): T {
    return r.results.sunrise;
  }

};