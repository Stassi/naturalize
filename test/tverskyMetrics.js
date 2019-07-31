import { expect } from 'chai';
import { describe } from 'mocha';
import { stringMetrics } from '../src';
import samples from './samples';

const [
  {
    distances: {
      tversky: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      tversky: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      tversky: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      tversky: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      tversky: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      tversky: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      tversky: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      tversky: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      tversky: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      tversky: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      tversky: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      tversky: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      tversky: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      tversky: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      tversky: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      tversky: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('tversky metrics', () => {
  describe('tversky distance', () => {
    describe('with default options', () => {
      const tverskyDistance = stringMetrics({ name: 'tversky' });

      it('should return the Tversky distance', () => {
        expect(tverskyDistance(alpha, beta)).to.equal(alphaBeta);
        expect(tverskyDistance(gamma, delta)).to.equal(gammaDelta);
        expect(tverskyDistance(epsilon, zeta)).to.equal(epsilonZeta);
        expect(tverskyDistance(eta, theta)).to.equal(etaTheta);
        expect(tverskyDistance(iota, kappa)).to.equal(iotaKappa);
        expect(tverskyDistance(lambda, mu)).to.equal(lambdaMu);
        expect(tverskyDistance(nu, xi)).to.equal(nuXi);
        expect(tverskyDistance(omicron, pi)).to.equal(omicronPi);
        expect(tverskyDistance(rho, sigma)).to.equal(rhoSigma);
        expect(tverskyDistance(tau, upsilon)).to.equal(tauUpsilon);
        expect(tverskyDistance(phi, chi)).to.equal(phiChi);
        expect(tverskyDistance(psi, omega)).to.equal(psiOmega);
        expect(tverskyDistance(bravo, charlie)).to.equal(bravoCharlie);
        expect(tverskyDistance(echo, foxtrot)).to.equal(echoFoxtrot);
        expect(tverskyDistance(golf, hotel)).to.equal(golfHotel);
        expect(tverskyDistance(india, juliett)).to.equal(indiaJuliett);
      });
    });
  });

  describe('tversky similarity', () => {
    describe('with default options', () => {
      const tverskySimilarity = stringMetrics({
        asSimilarity: true,
        name: 'tversky',
      });

      it('should return the Tversky index', () => {
        expect(tverskySimilarity(alpha, beta)).to.equal(1 - alphaBeta);
        expect(tverskySimilarity(gamma, delta)).to.equal(1 - gammaDelta);
        expect(tverskySimilarity(epsilon, zeta)).to.equal(1 - epsilonZeta);
        expect(tverskySimilarity(eta, theta)).to.equal(1 - etaTheta);
        expect(tverskySimilarity(iota, kappa)).to.equal(1 - iotaKappa);
        expect(tverskySimilarity(lambda, mu)).to.equal(1 - lambdaMu);
        expect(tverskySimilarity(nu, xi)).to.equal(1 - nuXi);
        expect(tverskySimilarity(omicron, pi)).to.equal(1 - omicronPi);
        expect(tverskySimilarity(rho, sigma)).to.equal(1 - rhoSigma);
        expect(tverskySimilarity(tau, upsilon)).to.equal(1 - tauUpsilon);
        expect(tverskySimilarity(phi, chi)).to.equal(1 - phiChi);
        expect(tverskySimilarity(psi, omega)).to.equal(1 - psiOmega);
        expect(tverskySimilarity(bravo, charlie)).to.equal(1 - bravoCharlie);
        expect(tverskySimilarity(echo, foxtrot)).to.equal(1 - echoFoxtrot);
        expect(tverskySimilarity(golf, hotel)).to.equal(1 - golfHotel);
        expect(tverskySimilarity(india, juliett)).to.equal(1 - indiaJuliett);
      });
    });
  });
});
