import { expect } from 'chai';
import { describe } from 'mocha';
import { stringMetrics } from '../../src';
import samples from './samples';

const [
  {
    distances: {
      ratcliffObershelp: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      ratcliffObershelp: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      ratcliffObershelp: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      ratcliffObershelp: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      ratcliffObershelp: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      ratcliffObershelp: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      ratcliffObershelp: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      ratcliffObershelp: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      ratcliffObershelp: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      ratcliffObershelp: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      ratcliffObershelp: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      ratcliffObershelp: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      ratcliffObershelp: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      ratcliffObershelp: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      ratcliffObershelp: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      ratcliffObershelp: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('ratcliffObershelp metrics', () => {
  describe('ratcliffObershelp distance', () => {
    const ratcliffObershelpDistance = stringMetrics({ name: 'ratcliffObershelp' });

    it('should return the Ratcliff-Obershelp distance', () => {
      expect(ratcliffObershelpDistance(alpha, beta)).to.equal(alphaBeta);
      expect(ratcliffObershelpDistance(gamma, delta)).to.equal(gammaDelta);
      expect(ratcliffObershelpDistance(epsilon, zeta)).to.equal(epsilonZeta);
      expect(ratcliffObershelpDistance(eta, theta)).to.equal(etaTheta);
      expect(ratcliffObershelpDistance(iota, kappa)).to.equal(iotaKappa);
      expect(ratcliffObershelpDistance(lambda, mu)).to.equal(lambdaMu);
      expect(ratcliffObershelpDistance(nu, xi)).to.equal(nuXi);
      expect(ratcliffObershelpDistance(omicron, pi)).to.equal(omicronPi);
      expect(ratcliffObershelpDistance(rho, sigma)).to.equal(rhoSigma);
      expect(ratcliffObershelpDistance(tau, upsilon)).to.equal(tauUpsilon);
      expect(ratcliffObershelpDistance(phi, chi)).to.equal(phiChi);
      expect(ratcliffObershelpDistance(psi, omega)).to.equal(psiOmega);
      expect(ratcliffObershelpDistance(bravo, charlie)).to.equal(bravoCharlie);
      expect(ratcliffObershelpDistance(echo, foxtrot)).to.equal(echoFoxtrot);
      expect(ratcliffObershelpDistance(golf, hotel)).to.equal(golfHotel);
      expect(ratcliffObershelpDistance(india, juliett)).to.equal(indiaJuliett);
    });
  });

  describe('ratcliffObershelp similarity', () => {
    const ratcliffObershelpSimilarity = stringMetrics({
      asSimilarity: true,
      name: 'ratcliffObershelp',
    });

    it('should return the Ratcliff-Obershelp similarity', () => {
      expect(ratcliffObershelpSimilarity(alpha, beta)).to.equal(1 - alphaBeta);
      expect(ratcliffObershelpSimilarity(gamma, delta)).to.equal(1 - gammaDelta);
      expect(ratcliffObershelpSimilarity(epsilon, zeta)).to.equal(1 - epsilonZeta);
      expect(ratcliffObershelpSimilarity(eta, theta)).to.equal(1 - etaTheta);
      expect(ratcliffObershelpSimilarity(iota, kappa)).to.equal(1 - iotaKappa);
      expect(ratcliffObershelpSimilarity(lambda, mu)).to.equal(1 - lambdaMu);
      expect(ratcliffObershelpSimilarity(nu, xi)).to.equal(1 - nuXi);
      expect(ratcliffObershelpSimilarity(omicron, pi)).to.equal(1 - omicronPi);
      expect(ratcliffObershelpSimilarity(rho, sigma)).to.equal(1 - rhoSigma);
      expect(ratcliffObershelpSimilarity(tau, upsilon)).to.equal(1 - tauUpsilon);
      expect(ratcliffObershelpSimilarity(phi, chi)).to.equal(1 - phiChi);
      expect(ratcliffObershelpSimilarity(psi, omega)).to.equal(1 - psiOmega);
      expect(ratcliffObershelpSimilarity(bravo, charlie)).to.equal(1 - bravoCharlie);
      expect(ratcliffObershelpSimilarity(echo, foxtrot)).to.equal(1 - echoFoxtrot);
      expect(ratcliffObershelpSimilarity(golf, hotel)).to.equal(1 - golfHotel);
      expect(ratcliffObershelpSimilarity(india, juliett)).to.equal(1 - indiaJuliett);
    });
  });
});
