import { expect } from 'chai';
import { describe } from 'mocha';
import { stringMetrics } from '../src';
import samples from './samples';

const [
  {
    distances: {
      identity: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      identity: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      identity: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      identity: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      identity: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      identity: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      identity: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      identity: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      identity: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      identity: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      identity: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      identity: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      identity: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      identity: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      identity: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      identity: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('identity metrics', () => {
  describe('identity distance', () => {
    const identityDistance = stringMetrics({ name: 'identity' });

    it('should return the identity distance', () => {
      expect(identityDistance(alpha, beta)).to.equal(alphaBeta);
      expect(identityDistance(gamma, delta)).to.equal(gammaDelta);
      expect(identityDistance(epsilon, zeta)).to.equal(epsilonZeta);
      expect(identityDistance(eta, theta)).to.equal(etaTheta);
      expect(identityDistance(iota, kappa)).to.equal(iotaKappa);
      expect(identityDistance(lambda, mu)).to.equal(lambdaMu);
      expect(identityDistance(nu, xi)).to.equal(nuXi);
      expect(identityDistance(omicron, pi)).to.equal(omicronPi);
      expect(identityDistance(rho, sigma)).to.equal(rhoSigma);
      expect(identityDistance(tau, upsilon)).to.equal(tauUpsilon);
      expect(identityDistance(phi, chi)).to.equal(phiChi);
      expect(identityDistance(psi, omega)).to.equal(psiOmega);
      expect(identityDistance(bravo, charlie)).to.equal(bravoCharlie);
      expect(identityDistance(echo, foxtrot)).to.equal(echoFoxtrot);
      expect(identityDistance(golf, hotel)).to.equal(golfHotel);
      expect(identityDistance(india, juliett)).to.equal(indiaJuliett);
    });
  });

  describe('identity similarity', () => {
    const identitySimilarity = stringMetrics({
      asSimilarity: true,
      name: 'identity',
    });

    it('should return the identity similarity', () => {
      expect(identitySimilarity(alpha, beta)).to.equal(1 - alphaBeta);
      expect(identitySimilarity(gamma, delta)).to.equal(1 - gammaDelta);
      expect(identitySimilarity(epsilon, zeta)).to.equal(1 - epsilonZeta);
      expect(identitySimilarity(eta, theta)).to.equal(1 - etaTheta);
      expect(identitySimilarity(iota, kappa)).to.equal(1 - iotaKappa);
      expect(identitySimilarity(lambda, mu)).to.equal(1 - lambdaMu);
      expect(identitySimilarity(nu, xi)).to.equal(1 - nuXi);
      expect(identitySimilarity(omicron, pi)).to.equal(1 - omicronPi);
      expect(identitySimilarity(rho, sigma)).to.equal(1 - rhoSigma);
      expect(identitySimilarity(tau, upsilon)).to.equal(1 - tauUpsilon);
      expect(identitySimilarity(phi, chi)).to.equal(1 - phiChi);
      expect(identitySimilarity(psi, omega)).to.equal(1 - psiOmega);
      expect(identitySimilarity(bravo, charlie)).to.equal(1 - bravoCharlie);
      expect(identitySimilarity(echo, foxtrot)).to.equal(1 - echoFoxtrot);
      expect(identitySimilarity(golf, hotel)).to.equal(1 - golfHotel);
      expect(identitySimilarity(india, juliett)).to.equal(1 - indiaJuliett);
    });
  });
});
