import 'mocha';
import { expect } from 'chai';

import randomCoordinates from 'lib/random-coordinates';

describe('Random Cooridnates', () => {

  it('Should return an array', () => {

    expect(randomCoordinates()).to.be.an('array');

  });

  it('Should return 100 element array', () => {

    expect(randomCoordinates().length).to.equal(100);

  });

  it('Array objects should be floating point numbers', () => {

    expect(randomCoordinates()[0].lat).to.be.a('number');
    expect(randomCoordinates()[0].lng).to.be.a('number');

  });

});