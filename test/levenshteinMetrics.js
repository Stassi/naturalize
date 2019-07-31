import { expect } from 'chai';
import { describe } from 'mocha';
import { stringMetrics } from '../src';
import samples from './samples';

const [
  {
    distances: {
      levenshtein: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      levenshtein: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      levenshtein: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      levenshtein: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      levenshtein: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      levenshtein: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      levenshtein: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      levenshtein: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      levenshtein: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      levenshtein: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      levenshtein: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      levenshtein: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      levenshtein: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      levenshtein: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      levenshtein: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      levenshtein: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('levenshtein metrics', () => {
  describe('levenshtein distance', () => {
    const levenshteinDistance = stringMetrics({ name: 'levenshtein' });

    it('should return the Levenshtein distance', () => {
      expect(levenshteinDistance(alpha, beta)).to.equal(alphaBeta);
      expect(levenshteinDistance(gamma, delta)).to.equal(gammaDelta);
      expect(levenshteinDistance(epsilon, zeta)).to.equal(epsilonZeta);
      expect(levenshteinDistance(eta, theta)).to.equal(etaTheta);
      expect(levenshteinDistance(iota, kappa)).to.equal(iotaKappa);
      expect(levenshteinDistance(lambda, mu)).to.equal(lambdaMu);
      expect(levenshteinDistance(nu, xi)).to.equal(nuXi);
      expect(levenshteinDistance(omicron, pi)).to.equal(omicronPi);
      expect(levenshteinDistance(rho, sigma)).to.equal(rhoSigma);
      expect(levenshteinDistance(tau, upsilon)).to.equal(tauUpsilon);
      expect(levenshteinDistance(phi, chi)).to.equal(phiChi);
      expect(levenshteinDistance(psi, omega)).to.equal(psiOmega);
      expect(levenshteinDistance(bravo, charlie)).to.equal(bravoCharlie);
      expect(levenshteinDistance(echo, foxtrot)).to.equal(echoFoxtrot);
      expect(levenshteinDistance(golf, hotel)).to.equal(golfHotel);
      expect(levenshteinDistance(india, juliett)).to.equal(indiaJuliett);
    });
  });

  describe('levenshtein similarity', () => {
    const levenshteinSimilarity = stringMetrics({
      asSimilarity: true,
      name: 'levenshtein',
    });

    it('should return the Levenshtein distance (invalid similarity)', () => {
      expect(levenshteinSimilarity(alpha, beta)).to.equal(alphaBeta);
      expect(levenshteinSimilarity(gamma, delta)).to.equal(gammaDelta);
      expect(levenshteinSimilarity(epsilon, zeta)).to.equal(epsilonZeta);
      expect(levenshteinSimilarity(eta, theta)).to.equal(etaTheta);
      expect(levenshteinSimilarity(iota, kappa)).to.equal(iotaKappa);
      expect(levenshteinSimilarity(lambda, mu)).to.equal(lambdaMu);
      expect(levenshteinSimilarity(nu, xi)).to.equal(nuXi);
      expect(levenshteinSimilarity(omicron, pi)).to.equal(omicronPi);
      expect(levenshteinSimilarity(rho, sigma)).to.equal(rhoSigma);
      expect(levenshteinSimilarity(tau, upsilon)).to.equal(tauUpsilon);
      expect(levenshteinSimilarity(phi, chi)).to.equal(phiChi);
      expect(levenshteinSimilarity(psi, omega)).to.equal(psiOmega);
      expect(levenshteinSimilarity(bravo, charlie)).to.equal(bravoCharlie);
      expect(levenshteinSimilarity(echo, foxtrot)).to.equal(echoFoxtrot);
      expect(levenshteinSimilarity(golf, hotel)).to.equal(golfHotel);
      expect(levenshteinSimilarity(india, juliett)).to.equal(indiaJuliett);
    });
  });
});
