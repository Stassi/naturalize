import { expect } from 'chai';
import { describe } from 'mocha';
import { stringMetrics } from '../../src';
import samples from './samples';

const [
  {
    distances: {
      lcs: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      lcs: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      lcs: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      lcs: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      lcs: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      lcs: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      lcs: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      lcs: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      lcs: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      lcs: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      lcs: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      lcs: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      lcs: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      lcs: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      lcs: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      lcs: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('lcs metrics', () => {
  describe('lcs distance', () => {
    const lcsDistance = stringMetrics({ name: 'lcs' });

    it('should return the Longest Common Subsequence (LCS) distance', () => {
      expect(lcsDistance(alpha, beta)).to.equal(alphaBeta);
      expect(lcsDistance(gamma, delta)).to.equal(gammaDelta);
      expect(lcsDistance(epsilon, zeta)).to.equal(epsilonZeta);
      expect(lcsDistance(eta, theta)).to.equal(etaTheta);
      expect(lcsDistance(iota, kappa)).to.equal(iotaKappa);
      expect(lcsDistance(lambda, mu)).to.equal(lambdaMu);
      expect(lcsDistance(nu, xi)).to.equal(nuXi);
      expect(lcsDistance(omicron, pi)).to.equal(omicronPi);
      expect(lcsDistance(rho, sigma)).to.equal(rhoSigma);
      expect(lcsDistance(tau, upsilon)).to.equal(tauUpsilon);
      expect(lcsDistance(phi, chi)).to.equal(phiChi);
      expect(lcsDistance(psi, omega)).to.equal(psiOmega);
      expect(lcsDistance(bravo, charlie)).to.equal(bravoCharlie);
      expect(lcsDistance(echo, foxtrot)).to.equal(echoFoxtrot);
      expect(lcsDistance(golf, hotel)).to.equal(golfHotel);
      expect(lcsDistance(india, juliett)).to.equal(indiaJuliett);
    });
  });

  describe('lcs similarity', () => {
    const lcsSimilarity = stringMetrics({
      asSimilarity: true,
      name: 'lcs',
    });

    it('should return the Longest Common Subsequence (LCS) similarity', () => {
      expect(lcsSimilarity(alpha, beta)).to.equal(1 - alphaBeta);
      expect(lcsSimilarity(gamma, delta)).to.equal(1 - gammaDelta);
      expect(lcsSimilarity(epsilon, zeta)).to.equal(1 - epsilonZeta);
      expect(lcsSimilarity(eta, theta)).to.equal(1 - etaTheta);
      expect(lcsSimilarity(iota, kappa)).to.equal(1 - iotaKappa);
      expect(lcsSimilarity(lambda, mu)).to.equal(1 - lambdaMu);
      expect(lcsSimilarity(nu, xi)).to.equal(1 - nuXi);
      expect(lcsSimilarity(omicron, pi)).to.equal(1 - omicronPi);
      expect(lcsSimilarity(rho, sigma)).to.equal(1 - rhoSigma);
      expect(lcsSimilarity(tau, upsilon)).to.equal(1 - tauUpsilon);
      expect(lcsSimilarity(phi, chi)).to.equal(1 - phiChi);
      expect(lcsSimilarity(psi, omega)).to.equal(1 - psiOmega);
      expect(lcsSimilarity(bravo, charlie)).to.equal(1 - bravoCharlie);
      expect(lcsSimilarity(echo, foxtrot)).to.equal(1 - echoFoxtrot);
      expect(lcsSimilarity(golf, hotel)).to.equal(1 - golfHotel);
      expect(lcsSimilarity(india, juliett)).to.equal(1 - indiaJuliett);
    });
  });
});
