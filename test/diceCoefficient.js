import { expect } from 'chai';
import { describe } from 'mocha';
import { diceCoefficient } from '../src';
import { diceCoefficientDistances as diceCoefficientSamples } from './samples';

describe('#diceCoefficient', () => {
  describe('provided identical strings', () => {
    const {
      identical: [
        alpha,
        beta,
        distance,
      ],
    } = diceCoefficientSamples;

    it('should return a distance of 1', () => {
      expect(diceCoefficient(alpha, beta)).to.equal(distance);
    });
  });

  describe('provided similar strings', () => {
    const {
      similar: [
        alpha,
        beta,
        distance,
      ],
    } = diceCoefficientSamples;

    it('should return a distance of ~0', () => {
      expect(diceCoefficient(alpha, beta)).to.equal(distance);
    });
  });

  describe('provided completely dissimilar strings', () => {
    const {
      completelyDissimilar: [
        alpha,
        beta,
        distance,
      ],
    } = diceCoefficientSamples;

    it('should return a distance of 0', () => {
      expect(diceCoefficient(alpha, beta)).to.equal(distance);
    });
  });
});
