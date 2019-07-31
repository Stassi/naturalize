import { expect } from 'chai';
import { describe } from 'mocha';
import { stringMetrics } from '../src';
import samples from './samples';

const [
  {
    distances: {
      overlap: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      overlap: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      overlap: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      overlap: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      overlap: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      overlap: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      overlap: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      overlap: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      overlap: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      overlap: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      overlap: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      overlap: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      overlap: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      overlap: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      overlap: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      overlap: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('overlap metrics', () => {
  describe('overlap distance', () => {
    const overlapDistance = stringMetrics({ name: 'overlap' });

    it('should return the overlap distance', () => {
      expect(overlapDistance(alpha, beta)).to.equal(alphaBeta);
      expect(overlapDistance(gamma, delta)).to.equal(gammaDelta);
      expect(overlapDistance(epsilon, zeta)).to.equal(epsilonZeta);
      expect(overlapDistance(eta, theta)).to.equal(etaTheta);
      expect(overlapDistance(iota, kappa)).to.equal(iotaKappa);
      expect(overlapDistance(lambda, mu)).to.equal(lambdaMu);
      expect(overlapDistance(nu, xi)).to.equal(nuXi);
      expect(overlapDistance(omicron, pi)).to.equal(omicronPi);
      expect(overlapDistance(rho, sigma)).to.equal(rhoSigma);
      expect(overlapDistance(tau, upsilon)).to.equal(tauUpsilon);
      expect(overlapDistance(phi, chi)).to.equal(phiChi);
      expect(overlapDistance(psi, omega)).to.equal(psiOmega);
      expect(overlapDistance(bravo, charlie)).to.equal(bravoCharlie);
      expect(overlapDistance(echo, foxtrot)).to.equal(echoFoxtrot);
      expect(overlapDistance(golf, hotel)).to.equal(golfHotel);
      expect(overlapDistance(india, juliett)).to.equal(indiaJuliett);
    });
  });

  describe('overlap similarity', () => {
    const overlapSimilarity = stringMetrics({
      asSimilarity: true,
      name: 'overlap',
    });

    it('should return the overlap coefficient', () => {
      expect(overlapSimilarity(alpha, beta)).to.equal(1 - alphaBeta);
      expect(overlapSimilarity(gamma, delta)).to.equal(1 - gammaDelta);
      expect(overlapSimilarity(epsilon, zeta)).to.equal(1 - epsilonZeta);
      expect(overlapSimilarity(eta, theta)).to.equal(1 - etaTheta);
      expect(overlapSimilarity(iota, kappa)).to.equal(1 - iotaKappa);
      expect(overlapSimilarity(lambda, mu)).to.equal(1 - lambdaMu);
      expect(overlapSimilarity(nu, xi)).to.equal(1 - nuXi);
      expect(overlapSimilarity(omicron, pi)).to.equal(1 - omicronPi);
      expect(overlapSimilarity(rho, sigma)).to.equal(1 - rhoSigma);
      expect(overlapSimilarity(tau, upsilon)).to.equal(1 - tauUpsilon);
      expect(overlapSimilarity(phi, chi)).to.equal(1 - phiChi);
      expect(overlapSimilarity(psi, omega)).to.equal(1 - psiOmega);
      expect(overlapSimilarity(bravo, charlie)).to.equal(1 - bravoCharlie);
      expect(overlapSimilarity(echo, foxtrot)).to.equal(1 - echoFoxtrot);
      expect(overlapSimilarity(golf, hotel)).to.equal(1 - golfHotel);
      expect(overlapSimilarity(india, juliett)).to.equal(1 - indiaJuliett);
    });
  });
});
