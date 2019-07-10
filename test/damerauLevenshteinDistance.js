import { expect } from 'chai';
import { describe } from 'mocha';
import { damerauLevenshteinDistance } from '../src';
import { damerauLevenshteinDistances as damerauLevenshteinDistanceSamples } from './samples';

// TODO: Clarify
describe('#damerauLevenshteinDistance', () => {
  describe('provided standard strings', () => {
    const [
      alpha,
      beta,
      distance,
    ] = damerauLevenshteinDistanceSamples;

    it('should return the expected distance', () => {
      expect(damerauLevenshteinDistance(alpha, beta)).to.equal(distance);
    });
  });
});
