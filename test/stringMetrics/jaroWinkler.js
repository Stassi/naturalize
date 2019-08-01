import { expect } from 'chai';
import { describe } from 'mocha';
import { stringMetrics } from '../../src';
import samples from './samples';

const [
  {
    distances: {
      jaroWinkler: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      jaroWinkler: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      jaroWinkler: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      jaroWinkler: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      jaroWinkler: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      jaroWinkler: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      jaroWinkler: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      jaroWinkler: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      jaroWinkler: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      jaroWinkler: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      jaroWinkler: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      jaroWinkler: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      jaroWinkler: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      jaroWinkler: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      jaroWinkler: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      jaroWinkler: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('jaroWinkler metrics', () => {
  describe('jaroWinkler distance', () => {
    const jaroWinklerDistance = stringMetrics({ name: 'jaroWinkler' });

    it('should return the Jaro–Winkler distance', () => {
      expect(jaroWinklerDistance(alpha, beta)).to.equal(alphaBeta);
      expect(jaroWinklerDistance(gamma, delta)).to.equal(gammaDelta);
      expect(jaroWinklerDistance(epsilon, zeta)).to.equal(epsilonZeta);
      expect(jaroWinklerDistance(eta, theta)).to.equal(etaTheta);
      expect(jaroWinklerDistance(iota, kappa)).to.equal(iotaKappa);
      expect(jaroWinklerDistance(lambda, mu)).to.equal(lambdaMu);
      expect(jaroWinklerDistance(nu, xi)).to.equal(nuXi);
      expect(jaroWinklerDistance(omicron, pi)).to.equal(omicronPi);
      expect(jaroWinklerDistance(rho, sigma)).to.equal(rhoSigma);
      expect(jaroWinklerDistance(tau, upsilon)).to.equal(tauUpsilon);
      expect(jaroWinklerDistance(phi, chi)).to.equal(phiChi);
      expect(jaroWinklerDistance(psi, omega)).to.equal(psiOmega);
      expect(jaroWinklerDistance(bravo, charlie)).to.equal(bravoCharlie);
      expect(jaroWinklerDistance(echo, foxtrot)).to.equal(echoFoxtrot);
      expect(jaroWinklerDistance(golf, hotel)).to.equal(golfHotel);
      expect(jaroWinklerDistance(india, juliett)).to.equal(indiaJuliett);
    });
  });

  describe('jaroWinkler similarity', () => {
    const jaroWinklerSimilarity = stringMetrics({
      asSimilarity: true,
      name: 'jaroWinkler',
    });

    it('should return the Jaro–Winkler similarity', () => {
      expect(jaroWinklerSimilarity(alpha, beta)).to.equal(1 - alphaBeta);
      expect(jaroWinklerSimilarity(gamma, delta)).to.equal(1 - gammaDelta);
      expect(jaroWinklerSimilarity(epsilon, zeta)).to.equal(1 - epsilonZeta);
      expect(jaroWinklerSimilarity(eta, theta)).to.equal(1 - etaTheta);
      expect(jaroWinklerSimilarity(iota, kappa)).to.equal(1 - iotaKappa);
      expect(jaroWinklerSimilarity(lambda, mu)).to.equal(1 - lambdaMu);
      expect(jaroWinklerSimilarity(nu, xi)).to.equal(1 - nuXi);
      expect(jaroWinklerSimilarity(omicron, pi)).to.equal(1 - omicronPi);
      expect(jaroWinklerSimilarity(rho, sigma)).to.equal(1 - rhoSigma);
      expect(jaroWinklerSimilarity(tau, upsilon)).to.equal(1 - tauUpsilon);
      expect(jaroWinklerSimilarity(phi, chi)).to.equal(1 - phiChi);
      expect(jaroWinklerSimilarity(psi, omega)).to.equal(1 - psiOmega);
      expect(jaroWinklerSimilarity(bravo, charlie)).to.equal(1 - bravoCharlie);
      expect(jaroWinklerSimilarity(echo, foxtrot)).to.equal(1 - echoFoxtrot);
      expect(jaroWinklerSimilarity(golf, hotel)).to.equal(1 - golfHotel);
      expect(jaroWinklerSimilarity(india, juliett)).to.equal(1 - indiaJuliett);
    });
  });
});
