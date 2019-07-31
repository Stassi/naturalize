import { expect } from 'chai';
import { describe } from 'mocha';
import { stringMetrics } from '../src';
import samples from './samples';

const [
  {
    distances: {
      lig2: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      lig2: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      lig2: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      lig2: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      lig2: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      lig2: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      lig2: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      lig2: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      lig2: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      lig2: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      lig2: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      lig2: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      lig2: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      lig2: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      lig2: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      lig2: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('lig2 metrics', () => {
  describe('lig2 distance', () => {
    const lig2Distance = stringMetrics({ name: 'lig2' });

    it('should return the LIG2 distance', () => {
      expect(lig2Distance(alpha, beta)).to.equal(alphaBeta);
      expect(lig2Distance(gamma, delta)).to.equal(gammaDelta);
      expect(lig2Distance(epsilon, zeta)).to.equal(epsilonZeta);
      expect(lig2Distance(eta, theta)).to.equal(etaTheta);
      expect(lig2Distance(iota, kappa)).to.equal(iotaKappa);
      expect(lig2Distance(lambda, mu)).to.equal(lambdaMu);
      expect(lig2Distance(nu, xi)).to.equal(nuXi);
      expect(lig2Distance(omicron, pi)).to.equal(omicronPi);
      expect(lig2Distance(rho, sigma)).to.equal(rhoSigma);
      expect(lig2Distance(tau, upsilon)).to.equal(tauUpsilon);
      expect(lig2Distance(phi, chi)).to.equal(phiChi);
      expect(lig2Distance(psi, omega)).to.equal(psiOmega);
      expect(lig2Distance(bravo, charlie)).to.equal(bravoCharlie);
      expect(lig2Distance(echo, foxtrot)).to.equal(echoFoxtrot);
      expect(lig2Distance(golf, hotel)).to.equal(golfHotel);
      expect(lig2Distance(india, juliett)).to.equal(indiaJuliett);
    });
  });

  describe('lig2 similarity', () => {
    const lig2Similarity = stringMetrics({
      asSimilarity: true,
      name: 'lig2',
    });

    it('should return the LIG2 similarity', () => {
      expect(lig2Similarity(alpha, beta)).to.equal(1 - alphaBeta);
      expect(lig2Similarity(gamma, delta)).to.equal(1 - gammaDelta);
      expect(lig2Similarity(epsilon, zeta)).to.equal(1 - epsilonZeta);
      expect(lig2Similarity(eta, theta)).to.equal(1 - etaTheta);
      expect(lig2Similarity(iota, kappa)).to.equal(1 - iotaKappa);
      expect(lig2Similarity(lambda, mu)).to.equal(1 - lambdaMu);
      expect(lig2Similarity(nu, xi)).to.equal(1 - nuXi);
      expect(lig2Similarity(omicron, pi)).to.equal(1 - omicronPi);
      expect(lig2Similarity(rho, sigma)).to.equal(1 - rhoSigma);
      expect(lig2Similarity(tau, upsilon)).to.equal(1 - tauUpsilon);
      expect(lig2Similarity(phi, chi)).to.equal(1 - phiChi);
      expect(lig2Similarity(psi, omega)).to.equal(1 - psiOmega);
      expect(lig2Similarity(bravo, charlie)).to.equal(1 - bravoCharlie);
      expect(lig2Similarity(echo, foxtrot)).to.equal(1 - echoFoxtrot);
      expect(lig2Similarity(golf, hotel)).to.equal(1 - golfHotel);
      expect(lig2Similarity(india, juliett)).to.equal(1 - indiaJuliett);
    });
  });
});
