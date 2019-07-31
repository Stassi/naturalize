import { expect } from 'chai';
import { describe } from 'mocha';
import { stringMetrics } from '../src';
import samples from './samples';

const [
  {
    distances: {
      sift4: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      sift4: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      sift4: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      sift4: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      sift4: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      sift4: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      sift4: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      sift4: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      sift4: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      sift4: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      sift4: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      sift4: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      sift4: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      sift4: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      sift4: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      sift4: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('sift4 metrics', () => {
  describe('sift4 distance', () => {
    const sift4Distance = stringMetrics({ name: 'sift4' });

    it('should return the SIFT4 distance', () => {
      expect(sift4Distance(alpha, beta)).to.equal(alphaBeta);
      expect(sift4Distance(gamma, delta)).to.equal(gammaDelta);
      expect(sift4Distance(epsilon, zeta)).to.equal(epsilonZeta);
      expect(sift4Distance(eta, theta)).to.equal(etaTheta);
      expect(sift4Distance(iota, kappa)).to.equal(iotaKappa);
      expect(sift4Distance(lambda, mu)).to.equal(lambdaMu);
      expect(sift4Distance(nu, xi)).to.equal(nuXi);
      expect(sift4Distance(omicron, pi)).to.equal(omicronPi);
      expect(sift4Distance(rho, sigma)).to.equal(rhoSigma);
      expect(sift4Distance(tau, upsilon)).to.equal(tauUpsilon);
      expect(sift4Distance(phi, chi)).to.equal(phiChi);
      expect(sift4Distance(psi, omega)).to.equal(psiOmega);
      expect(sift4Distance(bravo, charlie)).to.equal(bravoCharlie);
      expect(sift4Distance(echo, foxtrot)).to.equal(echoFoxtrot);
      expect(sift4Distance(golf, hotel)).to.equal(golfHotel);
      expect(sift4Distance(india, juliett)).to.equal(indiaJuliett);
    });
  });

  describe('sift4 similarity', () => {
    const sift4Similarity = stringMetrics({
      asSimilarity: true,
      name: 'sift4',
    });

    it('should return the SIFT4 distance (invalid similarity)', () => {
      expect(sift4Similarity(alpha, beta)).to.equal(alphaBeta);
      expect(sift4Similarity(gamma, delta)).to.equal(gammaDelta);
      expect(sift4Similarity(epsilon, zeta)).to.equal(epsilonZeta);
      expect(sift4Similarity(eta, theta)).to.equal(etaTheta);
      expect(sift4Similarity(iota, kappa)).to.equal(iotaKappa);
      expect(sift4Similarity(lambda, mu)).to.equal(lambdaMu);
      expect(sift4Similarity(nu, xi)).to.equal(nuXi);
      expect(sift4Similarity(omicron, pi)).to.equal(omicronPi);
      expect(sift4Similarity(rho, sigma)).to.equal(rhoSigma);
      expect(sift4Similarity(tau, upsilon)).to.equal(tauUpsilon);
      expect(sift4Similarity(phi, chi)).to.equal(phiChi);
      expect(sift4Similarity(psi, omega)).to.equal(psiOmega);
      expect(sift4Similarity(bravo, charlie)).to.equal(bravoCharlie);
      expect(sift4Similarity(echo, foxtrot)).to.equal(echoFoxtrot);
      expect(sift4Similarity(golf, hotel)).to.equal(golfHotel);
      expect(sift4Similarity(india, juliett)).to.equal(indiaJuliett);
    });
  });
});
