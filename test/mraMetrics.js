import { expect } from 'chai';
import { describe } from 'mocha';
import { stringMetrics } from '../src';
import samples from './samples';

const [
  {
    distances: {
      mra: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      mra: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      mra: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      mra: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      mra: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      mra: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      mra: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      mra: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      mra: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      mra: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      mra: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      mra: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      mra: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      mra: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      mra: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      mra: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('mra metrics', () => {
  describe('mra distance', () => {
    const mraDistance = stringMetrics({ name: 'mra' });

    it('should return the Match Rating Approach (MRA) comparison (invalid distance)', () => {
      expect(mraDistance(alpha, beta)).to.deep.equal(alphaBeta);
      expect(mraDistance(gamma, delta)).to.deep.equal(gammaDelta);
      expect(mraDistance(epsilon, zeta)).to.deep.equal(epsilonZeta);
      expect(mraDistance(eta, theta)).to.deep.equal(etaTheta);
      expect(mraDistance(iota, kappa)).to.deep.equal(iotaKappa);
      expect(mraDistance(lambda, mu)).to.deep.equal(lambdaMu);
      expect(mraDistance(nu, xi)).to.deep.equal(nuXi);
      expect(mraDistance(omicron, pi)).to.deep.equal(omicronPi);
      expect(mraDistance(rho, sigma)).to.deep.equal(rhoSigma);
      expect(mraDistance(tau, upsilon)).to.deep.equal(tauUpsilon);
      expect(mraDistance(phi, chi)).to.deep.equal(phiChi);
      expect(mraDistance(psi, omega)).to.deep.equal(psiOmega);
      expect(mraDistance(bravo, charlie)).to.deep.equal(bravoCharlie);
      expect(mraDistance(echo, foxtrot)).to.deep.equal(echoFoxtrot);
      expect(mraDistance(golf, hotel)).to.deep.equal(golfHotel);
      expect(mraDistance(india, juliett)).to.deep.equal(indiaJuliett);
    });
  });

  describe('mra similarity', () => {
    const mraSimilarity = stringMetrics({
      asSimilarity: true,
      name: 'mra',
    });

    it('should return the Match Rating Approach (MRA) comparison', () => {
      expect(mraSimilarity(alpha, beta)).to.deep.equal(alphaBeta);
      expect(mraSimilarity(gamma, delta)).to.deep.equal(gammaDelta);
      expect(mraSimilarity(epsilon, zeta)).to.deep.equal(epsilonZeta);
      expect(mraSimilarity(eta, theta)).to.deep.equal(etaTheta);
      expect(mraSimilarity(iota, kappa)).to.deep.equal(iotaKappa);
      expect(mraSimilarity(lambda, mu)).to.deep.equal(lambdaMu);
      expect(mraSimilarity(nu, xi)).to.deep.equal(nuXi);
      expect(mraSimilarity(omicron, pi)).to.deep.equal(omicronPi);
      expect(mraSimilarity(rho, sigma)).to.deep.equal(rhoSigma);
      expect(mraSimilarity(tau, upsilon)).to.deep.equal(tauUpsilon);
      expect(mraSimilarity(phi, chi)).to.deep.equal(phiChi);
      expect(mraSimilarity(psi, omega)).to.deep.equal(psiOmega);
      expect(mraSimilarity(bravo, charlie)).to.deep.equal(bravoCharlie);
      expect(mraSimilarity(echo, foxtrot)).to.deep.equal(echoFoxtrot);
      expect(mraSimilarity(golf, hotel)).to.deep.equal(golfHotel);
      expect(mraSimilarity(india, juliett)).to.deep.equal(indiaJuliett);
    });
  });
});
