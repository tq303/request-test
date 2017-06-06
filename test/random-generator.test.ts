import 'mocha';
import { expect } from 'chai';

import randomCoordinates from 'lib/random-coordinates';

const rc = new randomCoordinates();

describe('Random Cooridnates', () => {

  it('Should return an array', () => {

    expect(rc.coords).to.be.an('array');

  });

  it('Should return 100 element array', () => {

    expect(rc.coords.length).to.equal(100);

  });

  it('Array objects should be floating point numbers', () => {

    expect(rc.coords[0].lat).to.be.a('number');
    expect(rc.coords[0].lng).to.be.a('number');

  });

});