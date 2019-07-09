import { expect } from 'chai';
import { describe } from 'mocha';
import { damerauLevenshteinDistance } from '../src';
import { damerauLevenshteinDistances as damerauLevenshteinDistanceSamples } from './samples';

// TODO: Clarify all "expected distances"
describe('#damerauLevenshteinDistance', () => {
  describe('provided standard strings', () => {
    const {
      standard: [
        alpha,
        beta,
        distance,
      ],
    } = damerauLevenshteinDistanceSamples;

    it('should return the expected distance', () => {
      expect(damerauLevenshteinDistance(alpha, beta)).to.equal(distance);
    });
  });

  describe('provided restricted strings', () => {
    const {
      restricted: [
        [
          alpha,
          beta,
          alphaBeta,
        ],
        [
          gamma,
          delta,
          gammaDelta,
        ],
      ],
    } = damerauLevenshteinDistanceSamples;

    it('should return the expected distance', () => {
      expect(damerauLevenshteinDistance(
        alpha,
        beta,
        { restricted: true },
      )).to.equal(alphaBeta);

      expect(damerauLevenshteinDistance(
        gamma,
        delta,
        { restricted: true },
      )).to.equal(gammaDelta);
    });
  });

  describe('provided unrestricted strings', () => {
    const {
      unrestricted: [
        alpha,
        beta,
        distance,
      ],
    } = damerauLevenshteinDistanceSamples;

    it('should return the expected distance', () => {
      expect(damerauLevenshteinDistance(
        alpha,
        beta,
        { restricted: false },
      )).to.equal(distance);
    });
  });
});
