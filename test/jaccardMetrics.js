import { expect } from 'chai';
import { describe } from 'mocha';
import { stringMetrics } from '../src';
import samples from './samples';

const [
  {
    distances: {
      jaccard: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      jaccard: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      jaccard: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      jaccard: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      jaccard: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      jaccard: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      jaccard: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      jaccard: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      jaccard: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      jaccard: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      jaccard: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      jaccard: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      jaccard: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      jaccard: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      jaccard: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      jaccard: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('jaccard metrics', () => {
  describe('jaccard distance', () => {
    const jaccardDistance = stringMetrics({ name: 'jaccard' });

    it('should return the Jaccard distance', () => {
      expect(jaccardDistance(alpha, beta)).to.equal(alphaBeta);
      expect(jaccardDistance(gamma, delta)).to.equal(gammaDelta);
      expect(jaccardDistance(epsilon, zeta)).to.equal(epsilonZeta);
      expect(jaccardDistance(eta, theta)).to.equal(etaTheta);
      expect(jaccardDistance(iota, kappa)).to.equal(iotaKappa);
      expect(jaccardDistance(lambda, mu)).to.equal(lambdaMu);
      expect(jaccardDistance(nu, xi)).to.equal(nuXi);
      expect(jaccardDistance(omicron, pi)).to.equal(omicronPi);
      expect(jaccardDistance(rho, sigma)).to.equal(rhoSigma);
      expect(jaccardDistance(tau, upsilon)).to.equal(tauUpsilon);
      expect(jaccardDistance(phi, chi)).to.equal(phiChi);
      expect(jaccardDistance(psi, omega)).to.equal(psiOmega);
      expect(jaccardDistance(bravo, charlie)).to.equal(bravoCharlie);
      expect(jaccardDistance(echo, foxtrot)).to.equal(echoFoxtrot);
      expect(jaccardDistance(golf, hotel)).to.equal(golfHotel);
      expect(jaccardDistance(india, juliett)).to.equal(indiaJuliett);
    });
  });

  describe('jaccard similarity', () => {
    const jaccardSimilarity = stringMetrics({
      asSimilarity: true,
      name: 'jaccard',
    });

    it('should return the Jaccard index', () => {
      expect(jaccardSimilarity(alpha, beta)).to.equal(1 - alphaBeta);
      expect(jaccardSimilarity(gamma, delta)).to.equal(1 - gammaDelta);
      expect(jaccardSimilarity(epsilon, zeta)).to.equal(1 - epsilonZeta);
      expect(jaccardSimilarity(eta, theta)).to.equal(1 - etaTheta);
      expect(jaccardSimilarity(iota, kappa)).to.equal(1 - iotaKappa);
      expect(jaccardSimilarity(lambda, mu)).to.equal(1 - lambdaMu);
      expect(jaccardSimilarity(nu, xi)).to.equal(1 - nuXi);
      expect(jaccardSimilarity(omicron, pi)).to.equal(1 - omicronPi);
      expect(jaccardSimilarity(rho, sigma)).to.equal(1 - rhoSigma);
      expect(jaccardSimilarity(tau, upsilon)).to.equal(1 - tauUpsilon);
      expect(jaccardSimilarity(phi, chi)).to.equal(1 - phiChi);
      expect(jaccardSimilarity(psi, omega)).to.equal(1 - psiOmega);
      expect(jaccardSimilarity(bravo, charlie)).to.equal(1 - bravoCharlie);
      expect(jaccardSimilarity(echo, foxtrot)).to.equal(1 - echoFoxtrot);
      expect(jaccardSimilarity(golf, hotel)).to.equal(1 - golfHotel);
      expect(jaccardSimilarity(india, juliett)).to.equal(1 - indiaJuliett);
    });
  });
});
