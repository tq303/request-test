import 'mocha';
import { expect } from 'chai';

import randomCoordinates from 'lib/random-coordinates';
import rangeCoordinates from 'lib/range-coordinates';

const rndCoords = randomCoordinates();

describe('Random Cooridnates', () => {

  it('Should return an array', () => {

    expect(rndCoords).to.be.an('array');

  });

  it('Should return 100 element array', () => {

    expect(rndCoords.length).to.equal(100);

  });

  it('Array objects should be floating point numbers', () => {

    expect(rndCoords[0].lat).to.be.a('number');
    expect(rndCoords[0].lng).to.be.a('number');

  });

});

// 51°37′34″N 1°29′42″E﻿ / ﻿51.626°N 1.495°E﻿ / 51.626;

const rngCoords = rangeCoordinates({min: 51.3734, max: 51.626}, {min: 1.2942, max: 1.495});

describe('Range Cooridnates', () => {

  it('Should return an array', () => {

    expect(rngCoords).to.be.an('array');

  });

  it('Should return 100 element array', () => {

    expect(rngCoords.length).to.equal(100);

  });

  it('Array objects should be floating point numbers', () => {

    expect(rngCoords[0].lat).to.be.a('number');
    expect(rngCoords[0].lng).to.be.a('number');

  });

});