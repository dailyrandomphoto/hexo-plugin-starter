'use strict';

const { expect } = require('chai');
const lib = require('../lib/index.js');

describe('something', () => {
  it('should do something', () => {
    expect(lib).to.be.a('function');
  });
});
