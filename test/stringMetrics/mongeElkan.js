import { expect } from 'chai';
import { describe } from 'mocha';
import { stringMetrics } from '../../src';
import samples from './samples';

const [
  {
    distances: {
      mongeElkan: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      mongeElkan: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      mongeElkan: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      mongeElkan: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      mongeElkan: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      mongeElkan: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      mongeElkan: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      mongeElkan: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      mongeElkan: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      mongeElkan: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      mongeElkan: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      mongeElkan: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      mongeElkan: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      mongeElkan: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      mongeElkan: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      mongeElkan: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('mongeElkan metrics', () => {
  describe('mongeElkan distance', () => {
    const mongeElkanDistance = stringMetrics({ name: 'mongeElkan' });

    it('should return the Monge-Elkan distance', () => {
      expect(mongeElkanDistance(alpha, beta)).to.equal(alphaBeta);
      expect(mongeElkanDistance(gamma, delta)).to.equal(gammaDelta);
      expect(mongeElkanDistance(epsilon, zeta)).to.equal(epsilonZeta);
      expect(mongeElkanDistance(eta, theta)).to.equal(etaTheta);
      expect(mongeElkanDistance(iota, kappa)).to.equal(iotaKappa);
      expect(mongeElkanDistance(lambda, mu)).to.equal(lambdaMu);
      expect(mongeElkanDistance(nu, xi)).to.equal(nuXi);
      expect(mongeElkanDistance(omicron, pi)).to.equal(omicronPi);
      expect(mongeElkanDistance(rho, sigma)).to.equal(rhoSigma);
      expect(mongeElkanDistance(tau, upsilon)).to.equal(tauUpsilon);
      expect(mongeElkanDistance(phi, chi)).to.equal(phiChi);
      expect(mongeElkanDistance(psi, omega)).to.equal(psiOmega);
      expect(mongeElkanDistance(bravo, charlie)).to.equal(bravoCharlie);
      expect(mongeElkanDistance(echo, foxtrot)).to.equal(echoFoxtrot);
      expect(mongeElkanDistance(golf, hotel)).to.equal(golfHotel);
      expect(mongeElkanDistance(india, juliett)).to.equal(indiaJuliett);
    });

    describe('with inner identity similarity', () => {
      const identitySimilarity = stringMetrics({
        asSimilarity: true,
        name: 'identity',
      });

      const mongeElkanIdentityDistance = stringMetrics({
        name: 'mongeElkan',
        similarity: identitySimilarity,
      });

      it('should return the Monge-Elkan distance', () => {
        expect(mongeElkanIdentityDistance(alpha, beta)).to.equal(alphaBeta);
        expect(mongeElkanIdentityDistance(gamma, delta)).to.equal(gammaDelta);
        expect(mongeElkanIdentityDistance(epsilon, zeta)).to.equal(epsilonZeta);
        expect(mongeElkanIdentityDistance(eta, theta)).to.equal(etaTheta);
        expect(mongeElkanIdentityDistance(iota, kappa)).to.equal(iotaKappa);
        expect(mongeElkanIdentityDistance(lambda, mu)).to.equal(lambdaMu);
        expect(mongeElkanIdentityDistance(nu, xi)).to.equal(nuXi);
        expect(mongeElkanIdentityDistance(omicron, pi)).to.equal(omicronPi);
        expect(mongeElkanIdentityDistance(rho, sigma)).to.equal(rhoSigma);
        expect(mongeElkanIdentityDistance(tau, upsilon)).to.equal(tauUpsilon);
        expect(mongeElkanIdentityDistance(phi, chi)).to.equal(phiChi);
        expect(mongeElkanIdentityDistance(psi, omega)).to.equal(psiOmega);
        expect(mongeElkanIdentityDistance(bravo, charlie)).to.equal(bravoCharlie);
        expect(mongeElkanIdentityDistance(echo, foxtrot)).to.equal(echoFoxtrot);
        expect(mongeElkanIdentityDistance(golf, hotel)).to.equal(golfHotel);
        expect(mongeElkanIdentityDistance(india, juliett)).to.equal(indiaJuliett);
      });
    });
  });

  describe('mongeElkan similarity', () => {
    const mongeElkanSimilarity = stringMetrics({
      asSimilarity: true,
      name: 'mongeElkan',
    });

    it('should return the Monge-Elkan similarity', () => {
      expect(mongeElkanSimilarity(alpha, beta)).to.equal(1 - alphaBeta);
      expect(mongeElkanSimilarity(gamma, delta)).to.equal(1 - gammaDelta);
      expect(mongeElkanSimilarity(epsilon, zeta)).to.equal(1 - epsilonZeta);
      expect(mongeElkanSimilarity(eta, theta)).to.equal(1 - etaTheta);
      expect(mongeElkanSimilarity(iota, kappa)).to.equal(1 - iotaKappa);
      expect(mongeElkanSimilarity(lambda, mu)).to.equal(1 - lambdaMu);
      expect(mongeElkanSimilarity(nu, xi)).to.equal(1 - nuXi);
      expect(mongeElkanSimilarity(omicron, pi)).to.equal(1 - omicronPi);
      expect(mongeElkanSimilarity(rho, sigma)).to.equal(1 - rhoSigma);
      expect(mongeElkanSimilarity(tau, upsilon)).to.equal(1 - tauUpsilon);
      expect(mongeElkanSimilarity(phi, chi)).to.equal(1 - phiChi);
      expect(mongeElkanSimilarity(psi, omega)).to.equal(1 - psiOmega);
      expect(mongeElkanSimilarity(bravo, charlie)).to.equal(1 - bravoCharlie);
      expect(mongeElkanSimilarity(echo, foxtrot)).to.equal(1 - echoFoxtrot);
      expect(mongeElkanSimilarity(golf, hotel)).to.equal(1 - golfHotel);
      expect(mongeElkanSimilarity(india, juliett)).to.equal(1 - indiaJuliett);
    });

    describe('with inner identity similarity', () => {
      const identitySimilarity = stringMetrics({
        asSimilarity: true,
        name: 'identity',
      });

      const mongeElkanIdentitySimilarity = stringMetrics({
        asSimilarity: true,
        name: 'mongeElkan',
        similarity: identitySimilarity,
      });

      it('should return the Monge-Elkan similarity', () => {
        expect(mongeElkanIdentitySimilarity(alpha, beta)).to.equal(1 - alphaBeta);
        expect(mongeElkanIdentitySimilarity(gamma, delta)).to.equal(1 - gammaDelta);
        expect(mongeElkanIdentitySimilarity(epsilon, zeta)).to.equal(1 - epsilonZeta);
        expect(mongeElkanIdentitySimilarity(eta, theta)).to.equal(1 - etaTheta);
        expect(mongeElkanIdentitySimilarity(iota, kappa)).to.equal(1 - iotaKappa);
        expect(mongeElkanIdentitySimilarity(lambda, mu)).to.equal(1 - lambdaMu);
        expect(mongeElkanIdentitySimilarity(nu, xi)).to.equal(1 - nuXi);
        expect(mongeElkanIdentitySimilarity(omicron, pi)).to.equal(1 - omicronPi);
        expect(mongeElkanIdentitySimilarity(rho, sigma)).to.equal(1 - rhoSigma);
        expect(mongeElkanIdentitySimilarity(tau, upsilon)).to.equal(1 - tauUpsilon);
        expect(mongeElkanIdentitySimilarity(phi, chi)).to.equal(1 - phiChi);
        expect(mongeElkanIdentitySimilarity(psi, omega)).to.equal(1 - psiOmega);
        expect(mongeElkanIdentitySimilarity(bravo, charlie)).to.equal(1 - bravoCharlie);
        expect(mongeElkanIdentitySimilarity(echo, foxtrot)).to.equal(1 - echoFoxtrot);
        expect(mongeElkanIdentitySimilarity(golf, hotel)).to.equal(1 - golfHotel);
        expect(mongeElkanIdentitySimilarity(india, juliett)).to.equal(1 - indiaJuliett);
      });
    });
  });
});
