import * as request from 'request-promise-native';

import { LatLong, FormattedResponse, ReqResFormat } from 'lib/interfaces';
import { LongestDayInRange } from 'lib/constants';

export default class RequestClass {

  rf: ReqResFormat

  constructor(rf: ReqResFormat) {
    this.rf = rf;
  }

  getBatch(batch: Array<LatLong>): Promise<FormattedResponse[]> {
    return Promise.all(batch.map((c) => this.get(c)));
  }

  async reduce() {

    console.log('requesting all coordinates');

    try {

      while (this.rf.coordinates.length > 0) {

        await this.getBatch(this.rf.coordinates.splice(0, this.rf.batchSize))
                  .then(r => new Promise(resolve => setTimeout(resolve(this.rf.results.push(...r)), this.rf.timeout)));

        console.log(`retrieved ${this.rf.results.length}`);
      }

      console.log('formatting results');

      return this.rf.sortResponse(this.rf.results);

    } catch(e) {
      return new Error(e.message);
    }
  }

  async get(coords: LatLong): Promise<FormattedResponse> {
    return request({
      url: this.rf.baseUrl,
      qs: {
        ...coords,
        formatted: 0
      },
      json: true
    })
    .then((r) => { r.coords = coords; return r }); // append coords to response
  }

};