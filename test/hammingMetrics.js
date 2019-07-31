/* eslint-disable no-empty-pattern */
import { expect } from 'chai';
import { describe } from 'mocha';
import { stringMetrics } from '../src';
import samples from './samples';

const [
  {
    distances: {
      hamming: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      hamming: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      hamming: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      hamming: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {},
  {
    distances: {
      hamming: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      hamming: nuXi,
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
      hamming: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      hamming: phiChi,
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
      hamming: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
] = samples;

describe('hamming metrics', () => {
  describe('hamming distance', () => {
    const hammingDistance = stringMetrics({ name: 'hamming' });

    it('should return the hamming distance', () => {
      expect(hammingDistance(alpha, beta)).to.equal(alphaBeta);
      expect(hammingDistance(gamma, delta)).to.equal(gammaDelta);
      expect(hammingDistance(epsilon, zeta)).to.equal(epsilonZeta);
      expect(hammingDistance(eta, theta)).to.equal(etaTheta);
      expect(hammingDistance(lambda, mu)).to.equal(lambdaMu);
      expect(hammingDistance(nu, xi)).to.equal(nuXi);
      expect(hammingDistance(tau, upsilon)).to.equal(tauUpsilon);
      expect(hammingDistance(phi, chi)).to.equal(phiChi);
      expect(hammingDistance(golf, hotel)).to.equal(golfHotel);
    });
  });

  describe('hamming similarity', () => {
    const hammingSimilarity = stringMetrics({
      asSimilarity: true,
      name: 'hamming',
    });

    it('should return the hamming distance (invalid similarity)', () => {
      expect(hammingSimilarity(alpha, beta)).to.equal(alphaBeta);
      expect(hammingSimilarity(gamma, delta)).to.equal(gammaDelta);
      expect(hammingSimilarity(epsilon, zeta)).to.equal(epsilonZeta);
      expect(hammingSimilarity(eta, theta)).to.equal(etaTheta);
      expect(hammingSimilarity(lambda, mu)).to.equal(lambdaMu);
      expect(hammingSimilarity(nu, xi)).to.equal(nuXi);
      expect(hammingSimilarity(tau, upsilon)).to.equal(tauUpsilon);
      expect(hammingSimilarity(phi, chi)).to.equal(phiChi);
      expect(hammingSimilarity(golf, hotel)).to.equal(golfHotel);
    });
  });
});
