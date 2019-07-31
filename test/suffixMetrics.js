import { expect } from 'chai';
import { describe } from 'mocha';
import { stringMetrics } from '../src';
import samples from './samples';

const [
  {
    distances: {
      suffix: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      suffix: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      suffix: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      suffix: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      suffix: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      suffix: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      suffix: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      suffix: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      suffix: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      suffix: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      suffix: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      suffix: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      suffix: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      suffix: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      suffix: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      suffix: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('suffix metrics', () => {
  describe('suffix distance', () => {
    const suffixDistance = stringMetrics({ name: 'suffix' });

    it('should return the suffix distance', () => {
      expect(suffixDistance(alpha, beta)).to.equal(alphaBeta);
      expect(suffixDistance(gamma, delta)).to.equal(gammaDelta);
      expect(suffixDistance(epsilon, zeta)).to.equal(epsilonZeta);
      expect(suffixDistance(eta, theta)).to.equal(etaTheta);
      expect(suffixDistance(iota, kappa)).to.equal(iotaKappa);
      expect(suffixDistance(lambda, mu)).to.equal(lambdaMu);
      expect(suffixDistance(nu, xi)).to.equal(nuXi);
      expect(suffixDistance(omicron, pi)).to.equal(omicronPi);
      expect(suffixDistance(rho, sigma)).to.equal(rhoSigma);
      expect(suffixDistance(tau, upsilon)).to.equal(tauUpsilon);
      expect(suffixDistance(phi, chi)).to.equal(phiChi);
      expect(suffixDistance(psi, omega)).to.equal(psiOmega);
      expect(suffixDistance(bravo, charlie)).to.equal(bravoCharlie);
      expect(suffixDistance(echo, foxtrot)).to.equal(echoFoxtrot);
      expect(suffixDistance(golf, hotel)).to.equal(golfHotel);
      expect(suffixDistance(india, juliett)).to.equal(indiaJuliett);
    });
  });

  describe('suffix similarity', () => {
    const suffixSimilarity = stringMetrics({
      asSimilarity: true,
      name: 'suffix',
    });

    it('should return the suffix similarity', () => {
      expect(suffixSimilarity(alpha, beta)).to.equal(1 - alphaBeta);
      expect(suffixSimilarity(gamma, delta)).to.equal(1 - gammaDelta);
      expect(suffixSimilarity(epsilon, zeta)).to.equal(1 - epsilonZeta);
      expect(suffixSimilarity(eta, theta)).to.equal(1 - etaTheta);
      expect(suffixSimilarity(iota, kappa)).to.equal(1 - iotaKappa);
      expect(suffixSimilarity(lambda, mu)).to.equal(1 - lambdaMu);
      expect(suffixSimilarity(nu, xi)).to.equal(1 - nuXi);
      expect(suffixSimilarity(omicron, pi)).to.equal(1 - omicronPi);
      expect(suffixSimilarity(rho, sigma)).to.equal(1 - rhoSigma);
      expect(suffixSimilarity(tau, upsilon)).to.equal(1 - tauUpsilon);
      expect(suffixSimilarity(phi, chi)).to.equal(1 - phiChi);
      expect(suffixSimilarity(psi, omega)).to.equal(1 - psiOmega);
      expect(suffixSimilarity(bravo, charlie)).to.equal(1 - bravoCharlie);
      expect(suffixSimilarity(echo, foxtrot)).to.equal(1 - echoFoxtrot);
      expect(suffixSimilarity(golf, hotel)).to.equal(1 - golfHotel);
      expect(suffixSimilarity(india, juliett)).to.equal(1 - indiaJuliett);
    });
  });
});
