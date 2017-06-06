import 'mocha';
import { expect } from 'chai';

import requestClass from 'lib/request-class';

const rc = new requestClass();

describe('Request Class', function () {

  this.timeout(5000);

  it('Should return a 200 with an array 5 items', () => rc.getBatch().then((results) => {
    expect(results).to.be.a('array');
    expect(results.length).to.equal(5);
    expect(results.every(i => typeof i === 'string')).to.equal(true);
  }));

});