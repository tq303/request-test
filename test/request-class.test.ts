import 'mocha';
import { expect } from 'chai';

import requestClass from 'lib/request-class';
import { RequestFormat, LatLong } from 'lib/interfaces';
import * as moment from 'moment';

const SunriseFormat: RequestFormat = {
  format: (r) => r.results.sunrise,
  postFormat: (results) => results.sort((a, b) => moment(a).utc().isBefore(moment.utc(b)))
};

const rc = new requestClass(SunriseFormat);

describe('Request Class', function () {

  this.timeout(5000);

  const batch: Array<LatLong> = [
    { lat: -0.6577, lng: -161.21231 },
    { lat: 85.14706, lng: 103.26837 },
    { lat: 23.59191, lng: 49.37338 },
    { lat: -17.08209, lng: -138.25439 },
    { lat: -7.93691, lng: -51.25062 }
  ];

  it('Should return a 200 with an array 5 items', () => rc.getBatch(batch).then((results) => {
    expect(results).to.be.a('array');
    expect(results.length).to.equal(5);
    console.log(results);
    expect(results.every(i => typeof i === 'string')).to.equal(true);
  }));

});