import { expect } from 'chai';
import { describe } from 'mocha';
import { stringMetrics } from '../../src';
import samples from './samples';

const [
  {
    distances: {
      guth: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      guth: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      guth: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      guth: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      guth: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      guth: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      guth: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      guth: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      guth: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      guth: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      guth: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      guth: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      guth: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      guth: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      guth: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      guth: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('guth metrics', () => {
  describe('guth distance', () => {
    const guthDistance = stringMetrics({ name: 'guth' });

    it('should return the Guth distance', () => {
      expect(guthDistance(alpha, beta)).to.equal(alphaBeta);
      expect(guthDistance(gamma, delta)).to.equal(gammaDelta);
      expect(guthDistance(epsilon, zeta)).to.equal(epsilonZeta);
      expect(guthDistance(eta, theta)).to.equal(etaTheta);
      expect(guthDistance(iota, kappa)).to.equal(iotaKappa);
      expect(guthDistance(lambda, mu)).to.equal(lambdaMu);
      expect(guthDistance(nu, xi)).to.equal(nuXi);
      expect(guthDistance(omicron, pi)).to.equal(omicronPi);
      expect(guthDistance(rho, sigma)).to.equal(rhoSigma);
      expect(guthDistance(tau, upsilon)).to.equal(tauUpsilon);
      expect(guthDistance(phi, chi)).to.equal(phiChi);
      expect(guthDistance(psi, omega)).to.equal(psiOmega);
      expect(guthDistance(bravo, charlie)).to.equal(bravoCharlie);
      expect(guthDistance(echo, foxtrot)).to.equal(echoFoxtrot);
      expect(guthDistance(golf, hotel)).to.equal(golfHotel);
      expect(guthDistance(india, juliett)).to.equal(indiaJuliett);
    });
  });

  describe('guth similarity', () => {
    const guthSimilarity = stringMetrics({
      asSimilarity: true,
      name: 'guth',
    });

    it('should return the Guth distance (invalid similarity)', () => {
      expect(guthSimilarity(alpha, beta)).to.equal(alphaBeta);
      expect(guthSimilarity(gamma, delta)).to.equal(gammaDelta);
      expect(guthSimilarity(epsilon, zeta)).to.equal(epsilonZeta);
      expect(guthSimilarity(eta, theta)).to.equal(etaTheta);
      expect(guthSimilarity(iota, kappa)).to.equal(iotaKappa);
      expect(guthSimilarity(lambda, mu)).to.equal(lambdaMu);
      expect(guthSimilarity(nu, xi)).to.equal(nuXi);
      expect(guthSimilarity(omicron, pi)).to.equal(omicronPi);
      expect(guthSimilarity(rho, sigma)).to.equal(rhoSigma);
      expect(guthSimilarity(tau, upsilon)).to.equal(tauUpsilon);
      expect(guthSimilarity(phi, chi)).to.equal(phiChi);
      expect(guthSimilarity(psi, omega)).to.equal(psiOmega);
      expect(guthSimilarity(bravo, charlie)).to.equal(bravoCharlie);
      expect(guthSimilarity(echo, foxtrot)).to.equal(echoFoxtrot);
      expect(guthSimilarity(golf, hotel)).to.equal(golfHotel);
      expect(guthSimilarity(india, juliett)).to.equal(indiaJuliett);
    });
  });
});
