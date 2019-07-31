import { expect } from 'chai';
import { describe } from 'mocha';
import { stringMetrics } from '../src';
import samples from './samples';

const [
  {
    distances: {
      prefix: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      prefix: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      prefix: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      prefix: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      prefix: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      prefix: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      prefix: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      prefix: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      prefix: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      prefix: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      prefix: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      prefix: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      prefix: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      prefix: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      prefix: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      prefix: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('prefix metrics', () => {
  describe('prefix distance', () => {
    const prefixDistance = stringMetrics({ name: 'prefix' });

    it('should return the prefix distance', () => {
      expect(prefixDistance(alpha, beta)).to.equal(alphaBeta);
      expect(prefixDistance(gamma, delta)).to.equal(gammaDelta);
      expect(prefixDistance(epsilon, zeta)).to.equal(epsilonZeta);
      expect(prefixDistance(eta, theta)).to.equal(etaTheta);
      expect(prefixDistance(iota, kappa)).to.equal(iotaKappa);
      expect(prefixDistance(lambda, mu)).to.equal(lambdaMu);
      expect(prefixDistance(nu, xi)).to.equal(nuXi);
      expect(prefixDistance(omicron, pi)).to.equal(omicronPi);
      expect(prefixDistance(rho, sigma)).to.equal(rhoSigma);
      expect(prefixDistance(tau, upsilon)).to.equal(tauUpsilon);
      expect(prefixDistance(phi, chi)).to.equal(phiChi);
      expect(prefixDistance(psi, omega)).to.equal(psiOmega);
      expect(prefixDistance(bravo, charlie)).to.equal(bravoCharlie);
      expect(prefixDistance(echo, foxtrot)).to.equal(echoFoxtrot);
      expect(prefixDistance(golf, hotel)).to.equal(golfHotel);
      expect(prefixDistance(india, juliett)).to.equal(indiaJuliett);
    });
  });

  describe('prefix similarity', () => {
    const prefixSimilarity = stringMetrics({
      asSimilarity: true,
      name: 'prefix',
    });

    it('should return the prefix similarity', () => {
      expect(prefixSimilarity(alpha, beta)).to.equal(1 - alphaBeta);
      expect(prefixSimilarity(gamma, delta)).to.equal(1 - gammaDelta);
      expect(prefixSimilarity(epsilon, zeta)).to.equal(1 - epsilonZeta);
      expect(prefixSimilarity(eta, theta)).to.equal(1 - etaTheta);
      expect(prefixSimilarity(iota, kappa)).to.equal(1 - iotaKappa);
      expect(prefixSimilarity(lambda, mu)).to.equal(1 - lambdaMu);
      expect(prefixSimilarity(nu, xi)).to.equal(1 - nuXi);
      expect(prefixSimilarity(omicron, pi)).to.equal(1 - omicronPi);
      expect(prefixSimilarity(rho, sigma)).to.equal(1 - rhoSigma);
      expect(prefixSimilarity(tau, upsilon)).to.equal(1 - tauUpsilon);
      expect(prefixSimilarity(phi, chi)).to.equal(1 - phiChi);
      expect(prefixSimilarity(psi, omega)).to.equal(1 - psiOmega);
      expect(prefixSimilarity(bravo, charlie)).to.equal(1 - bravoCharlie);
      expect(prefixSimilarity(echo, foxtrot)).to.equal(1 - echoFoxtrot);
      expect(prefixSimilarity(golf, hotel)).to.equal(1 - golfHotel);
      expect(prefixSimilarity(india, juliett)).to.equal(1 - indiaJuliett);
    });
  });
});
