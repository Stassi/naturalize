import { expect } from 'chai';
import { describe } from 'mocha';
import { levenshteinDistance } from '../src';
import { levenshteinDistances as levenshteinDistanceSamples } from './samples';

describe('#levenshteinDistance', () => {
  describe('provided identical strings', () => {
    const {
      identical: [
        alpha,
        beta,
        distance,
      ],
    } = levenshteinDistanceSamples;

    it('should return a distance of 0', () => {
      expect(levenshteinDistance(alpha, beta)).to.equal(distance);
    });
  });

  describe('provided similar strings', () => {
    const {
      similar: [
        alpha,
        beta,
        distance,
      ],
    } = levenshteinDistanceSamples;

    it('should return a distance of 1', () => {
      expect(levenshteinDistance(alpha, beta)).to.equal(distance);
    });
  });
});
