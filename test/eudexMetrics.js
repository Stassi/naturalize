/* eslint-disable no-empty-pattern */
import { expect } from 'chai';
import { describe } from 'mocha';
import { stringMetrics } from '../src';
import samples from './samples';

const [
  {
    distances: {
      eudex: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      eudex: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      eudex: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      eudex: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      eudex: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      eudex: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      eudex: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      eudex: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      eudex: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      eudex: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      eudex: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      eudex: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      eudex: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      eudex: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {},
  {
    distances: {
      eudex: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('eudex metrics', () => {
  describe('eudex distance', () => {
    const eudexDistance = stringMetrics({ name: 'eudex' });

    it('should return the eudex distance', () => {
      expect(eudexDistance(alpha, beta)).to.equal(alphaBeta);
      expect(eudexDistance(gamma, delta)).to.equal(gammaDelta);
      expect(eudexDistance(epsilon, zeta)).to.equal(epsilonZeta);
      expect(eudexDistance(eta, theta)).to.equal(etaTheta);
      expect(eudexDistance(iota, kappa)).to.equal(iotaKappa);
      expect(eudexDistance(lambda, mu)).to.equal(lambdaMu);
      expect(eudexDistance(nu, xi)).to.equal(nuXi);
      expect(eudexDistance(omicron, pi)).to.equal(omicronPi);
      expect(eudexDistance(rho, sigma)).to.equal(rhoSigma);
      expect(eudexDistance(tau, upsilon)).to.equal(tauUpsilon);
      expect(eudexDistance(phi, chi)).to.equal(phiChi);
      expect(eudexDistance(psi, omega)).to.equal(psiOmega);
      expect(eudexDistance(bravo, charlie)).to.equal(bravoCharlie);
      expect(eudexDistance(echo, foxtrot)).to.equal(echoFoxtrot);
      expect(eudexDistance(india, juliett)).to.equal(indiaJuliett);
    });
  });

  describe('eudex similarity', () => {
    const eudexSimilarity = stringMetrics({
      asSimilarity: true,
      name: 'eudex',
    });

    it('should return the eudex distance (invalid similarity)', () => {
      expect(eudexSimilarity(alpha, beta)).to.equal(alphaBeta);
      expect(eudexSimilarity(gamma, delta)).to.equal(gammaDelta);
      expect(eudexSimilarity(epsilon, zeta)).to.equal(epsilonZeta);
      expect(eudexSimilarity(eta, theta)).to.equal(etaTheta);
      expect(eudexSimilarity(iota, kappa)).to.equal(iotaKappa);
      expect(eudexSimilarity(lambda, mu)).to.equal(lambdaMu);
      expect(eudexSimilarity(nu, xi)).to.equal(nuXi);
      expect(eudexSimilarity(omicron, pi)).to.equal(omicronPi);
      expect(eudexSimilarity(rho, sigma)).to.equal(rhoSigma);
      expect(eudexSimilarity(tau, upsilon)).to.equal(tauUpsilon);
      expect(eudexSimilarity(phi, chi)).to.equal(phiChi);
      expect(eudexSimilarity(psi, omega)).to.equal(psiOmega);
      expect(eudexSimilarity(bravo, charlie)).to.equal(bravoCharlie);
      expect(eudexSimilarity(echo, foxtrot)).to.equal(echoFoxtrot);
      expect(eudexSimilarity(india, juliett)).to.equal(indiaJuliett);
    });
  });
});
