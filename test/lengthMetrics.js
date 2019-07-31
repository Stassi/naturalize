import { expect } from 'chai';
import { describe } from 'mocha';
import { stringMetrics } from '../src';
import samples from './samples';

const [
  {
    distances: {
      length: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      length: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      length: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      length: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      length: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      length: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      length: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      length: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      length: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      length: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      length: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      length: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      length: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      length: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      length: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      length: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('length metrics', () => {
  describe('length distance', () => {
    const lengthDistance = stringMetrics({ name: 'length' });

    it('should return the length distance', () => {
      expect(lengthDistance(alpha, beta)).to.equal(alphaBeta);
      expect(lengthDistance(gamma, delta)).to.equal(gammaDelta);
      expect(lengthDistance(epsilon, zeta)).to.equal(epsilonZeta);
      expect(lengthDistance(eta, theta)).to.equal(etaTheta);
      expect(lengthDistance(iota, kappa)).to.equal(iotaKappa);
      expect(lengthDistance(lambda, mu)).to.equal(lambdaMu);
      expect(lengthDistance(nu, xi)).to.equal(nuXi);
      expect(lengthDistance(omicron, pi)).to.equal(omicronPi);
      expect(lengthDistance(rho, sigma)).to.equal(rhoSigma);
      expect(lengthDistance(tau, upsilon)).to.equal(tauUpsilon);
      expect(lengthDistance(phi, chi)).to.equal(phiChi);
      expect(lengthDistance(psi, omega)).to.equal(psiOmega);
      expect(lengthDistance(bravo, charlie)).to.equal(bravoCharlie);
      expect(lengthDistance(echo, foxtrot)).to.equal(echoFoxtrot);
      expect(lengthDistance(golf, hotel)).to.equal(golfHotel);
      expect(lengthDistance(india, juliett)).to.equal(indiaJuliett);
    });
  });

  describe('length similarity', () => {
    const lengthSimilarity = stringMetrics({
      asSimilarity: true,
      name: 'length',
    });

    it('should return the length similarity', () => {
      expect(lengthSimilarity(alpha, beta)).to.equal(1 - alphaBeta);
      expect(lengthSimilarity(gamma, delta)).to.equal(1 - gammaDelta);
      expect(lengthSimilarity(epsilon, zeta)).to.equal(1 - epsilonZeta);
      expect(lengthSimilarity(eta, theta)).to.equal(1 - etaTheta);
      expect(lengthSimilarity(iota, kappa)).to.equal(1 - iotaKappa);
      expect(lengthSimilarity(lambda, mu)).to.equal(1 - lambdaMu);
      expect(lengthSimilarity(nu, xi)).to.equal(1 - nuXi);
      expect(lengthSimilarity(omicron, pi)).to.equal(1 - omicronPi);
      expect(lengthSimilarity(rho, sigma)).to.equal(1 - rhoSigma);
      expect(lengthSimilarity(tau, upsilon)).to.equal(1 - tauUpsilon);
      expect(lengthSimilarity(phi, chi)).to.equal(1 - phiChi);
      expect(lengthSimilarity(psi, omega)).to.equal(1 - psiOmega);
      expect(lengthSimilarity(bravo, charlie)).to.equal(1 - bravoCharlie);
      expect(lengthSimilarity(echo, foxtrot)).to.equal(1 - echoFoxtrot);
      expect(lengthSimilarity(golf, hotel)).to.equal(1 - golfHotel);
      expect(lengthSimilarity(india, juliett)).to.equal(1 - indiaJuliett);
    });
  });
});
