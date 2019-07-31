import { expect } from 'chai';
import { describe } from 'mocha';
import { stringMetrics } from '../src';
import samples from './samples';

const [
  {
    distances: {
      jaro: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      jaro: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      jaro: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      jaro: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      jaro: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      jaro: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      jaro: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      jaro: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      jaro: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      jaro: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      jaro: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      jaro: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      jaro: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      jaro: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      jaro: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      jaro: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('jaro metrics', () => {
  describe('jaro distance', () => {
    const jaroDistance = stringMetrics({ name: 'jaro' });

    it('should return the Jaro distance', () => {
      expect(jaroDistance(alpha, beta)).to.equal(alphaBeta);
      expect(jaroDistance(gamma, delta)).to.equal(gammaDelta);
      expect(jaroDistance(epsilon, zeta)).to.equal(epsilonZeta);
      expect(jaroDistance(eta, theta)).to.equal(etaTheta);
      expect(jaroDistance(iota, kappa)).to.equal(iotaKappa);
      expect(jaroDistance(lambda, mu)).to.equal(lambdaMu);
      expect(jaroDistance(nu, xi)).to.equal(nuXi);
      expect(jaroDistance(omicron, pi)).to.equal(omicronPi);
      expect(jaroDistance(rho, sigma)).to.equal(rhoSigma);
      expect(jaroDistance(tau, upsilon)).to.equal(tauUpsilon);
      expect(jaroDistance(phi, chi)).to.equal(phiChi);
      expect(jaroDistance(psi, omega)).to.equal(psiOmega);
      expect(jaroDistance(bravo, charlie)).to.equal(bravoCharlie);
      expect(jaroDistance(echo, foxtrot)).to.equal(echoFoxtrot);
      expect(jaroDistance(golf, hotel)).to.equal(golfHotel);
      expect(jaroDistance(india, juliett)).to.equal(indiaJuliett);
    });
  });

  describe('jaro similarity', () => {
    const jaroSimilarity = stringMetrics({
      asSimilarity: true,
      name: 'jaro',
    });

    it('should return the Jaro similarity', () => {
      expect(jaroSimilarity(alpha, beta)).to.equal(1 - alphaBeta);
      expect(jaroSimilarity(gamma, delta)).to.equal(1 - gammaDelta);
      expect(jaroSimilarity(epsilon, zeta)).to.equal(1 - epsilonZeta);
      expect(jaroSimilarity(eta, theta)).to.equal(1 - etaTheta);
      expect(jaroSimilarity(iota, kappa)).to.equal(1 - iotaKappa);
      expect(jaroSimilarity(lambda, mu)).to.equal(1 - lambdaMu);
      expect(jaroSimilarity(nu, xi)).to.equal(1 - nuXi);
      expect(jaroSimilarity(omicron, pi)).to.equal(1 - omicronPi);
      expect(jaroSimilarity(rho, sigma)).to.equal(1 - rhoSigma);
      expect(jaroSimilarity(tau, upsilon)).to.equal(1 - tauUpsilon);
      expect(jaroSimilarity(phi, chi)).to.equal(1 - phiChi);
      expect(jaroSimilarity(psi, omega)).to.equal(1 - psiOmega);
      expect(jaroSimilarity(bravo, charlie)).to.equal(1 - bravoCharlie);
      expect(jaroSimilarity(echo, foxtrot)).to.equal(1 - echoFoxtrot);
      expect(jaroSimilarity(golf, hotel)).to.equal(1 - golfHotel);
      expect(jaroSimilarity(india, juliett)).to.equal(1 - indiaJuliett);
    });
  });
});
