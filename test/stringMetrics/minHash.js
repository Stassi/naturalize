/* eslint-disable no-empty-pattern */
import { expect } from 'chai';
import { describe } from 'mocha';
import { stringMetrics } from '../../src';
import samples from './samples';

const [
  {
    distances: {
      minHash: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      minHash: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      minHash: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      minHash: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {},
  {
    distances: {
      minHash: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      minHash: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {},
  {},
  {
    distances: {
      minHash: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      minHash: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {},
  {},
  {},
  {
    distances: {
      minHash: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {},
] = samples;

describe('minHash metrics', () => {
  describe('minHash distance', () => {
    const minHashDistance = stringMetrics({ name: 'minHash' });

    it('should return the MinHash signature distance', () => {
      expect(minHashDistance(alpha, beta)).to.equal(alphaBeta);
      expect(minHashDistance(gamma, delta)).to.equal(gammaDelta);
      expect(minHashDistance(epsilon, zeta)).to.equal(epsilonZeta);
      expect(minHashDistance(eta, theta)).to.equal(etaTheta);
      expect(minHashDistance(lambda, mu)).to.equal(lambdaMu);
      expect(minHashDistance(nu, xi)).to.equal(nuXi);
      expect(minHashDistance(tau, upsilon)).to.equal(tauUpsilon);
      expect(minHashDistance(phi, chi)).to.equal(phiChi);
      expect(minHashDistance(golf, hotel)).to.equal(golfHotel);
    });
  });

  describe('minHash similarity', () => {
    const minHashSimilarity = stringMetrics({
      asSimilarity: true,
      name: 'minHash',
    });

    it('should return the MinHash signature similarity', () => {
      expect(minHashSimilarity(alpha, beta)).to.equal(1 - alphaBeta);
      expect(minHashSimilarity(gamma, delta)).to.equal(1 - gammaDelta);
      expect(minHashSimilarity(epsilon, zeta)).to.equal(1 - epsilonZeta);
      expect(minHashSimilarity(eta, theta)).to.equal(1 - etaTheta);
      expect(minHashSimilarity(lambda, mu)).to.equal(1 - lambdaMu);
      expect(minHashSimilarity(nu, xi)).to.equal(1 - nuXi);
      expect(minHashSimilarity(tau, upsilon)).to.equal(1 - tauUpsilon);
      expect(minHashSimilarity(phi, chi)).to.equal(1 - phiChi);
      expect(minHashSimilarity(golf, hotel)).to.equal(1 - golfHotel);
    });
  });
});
