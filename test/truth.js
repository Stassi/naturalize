import { expect } from 'chai';
import { describe } from 'mocha';
import { truth } from '../src';

// TODO: Remove
describe('#truth', () => {
  it('is not truth', () => {
    expect(truth()).to.not.be.true;
  });
});
