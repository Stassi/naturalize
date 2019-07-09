import { expect } from 'chai';
import { describe } from 'mocha';
import { jaroWinklerDistance } from '../src';
import { jaroWinklerDistances as jaroWinklerDistanceSamples } from './samples';

describe('#jaroWinklerDistance', () => {
  describe('provided identical strings', () => {
    const {
      identical: [
        alpha,
        beta,
        distance,
      ],
    } = jaroWinklerDistanceSamples;

    it('should return a distance of 1', () => {
      expect(jaroWinklerDistance(alpha, beta)).to.equal(distance);
    });
  });

  describe('provided similar strings', () => {
    const {
      similar: [
        alpha,
        beta,
        distance,
      ],
    } = jaroWinklerDistanceSamples;

    it('should return a distance of ~1', () => {
      expect(jaroWinklerDistance(alpha, beta)).to.equal(distance);
    });
  });

  describe('provided completely dissimilar strings', () => {
    const {
      completelyDissimilar: [
        alpha,
        beta,
        distance,
      ],
    } = jaroWinklerDistanceSamples;

    it('should return a distance of 0', () => {
      expect(jaroWinklerDistance(alpha, beta)).to.equal(distance);
    });
  });
});
