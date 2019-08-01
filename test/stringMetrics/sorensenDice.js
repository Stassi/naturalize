import { expect } from 'chai';
import { describe } from 'mocha';
import { stringMetrics } from '../../src';
import samples from './samples';

const [
  {
    distances: {
      sorensenDice: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      sorensenDice: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      sorensenDice: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      sorensenDice: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      sorensenDice: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      sorensenDice: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      sorensenDice: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      sorensenDice: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      sorensenDice: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      sorensenDice: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      sorensenDice: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      sorensenDice: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      sorensenDice: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      sorensenDice: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      sorensenDice: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      sorensenDice: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('sorensenDice metrics', () => {
  describe('sorensenDice distance', () => {
    const sorensenDiceDistance = stringMetrics({ name: 'sorensenDice' });

    it('should return the Sørensen–Dice distance', () => {
      expect(sorensenDiceDistance(alpha, beta)).to.equal(alphaBeta);
      expect(sorensenDiceDistance(gamma, delta)).to.equal(gammaDelta);
      expect(sorensenDiceDistance(epsilon, zeta)).to.equal(epsilonZeta);
      expect(sorensenDiceDistance(eta, theta)).to.equal(etaTheta);
      expect(sorensenDiceDistance(iota, kappa)).to.equal(iotaKappa);
      expect(sorensenDiceDistance(lambda, mu)).to.equal(lambdaMu);
      expect(sorensenDiceDistance(nu, xi)).to.equal(nuXi);
      expect(sorensenDiceDistance(omicron, pi)).to.equal(omicronPi);
      expect(sorensenDiceDistance(rho, sigma)).to.equal(rhoSigma);
      expect(sorensenDiceDistance(tau, upsilon)).to.equal(tauUpsilon);
      expect(sorensenDiceDistance(phi, chi)).to.equal(phiChi);
      expect(sorensenDiceDistance(psi, omega)).to.equal(psiOmega);
      expect(sorensenDiceDistance(bravo, charlie)).to.equal(bravoCharlie);
      expect(sorensenDiceDistance(echo, foxtrot)).to.equal(echoFoxtrot);
      expect(sorensenDiceDistance(golf, hotel)).to.equal(golfHotel);
      expect(sorensenDiceDistance(india, juliett)).to.equal(indiaJuliett);
    });
  });

  describe('sorensenDice similarity', () => {
    const sorensenDiceSimilarity = stringMetrics({
      asSimilarity: true,
      name: 'sorensenDice',
    });

    it('should return the Sørensen–Dice coefficient', () => {
      expect(sorensenDiceSimilarity(alpha, beta)).to.equal(1 - alphaBeta);
      expect(sorensenDiceSimilarity(gamma, delta)).to.equal(1 - gammaDelta);
      expect(sorensenDiceSimilarity(epsilon, zeta)).to.equal(1 - epsilonZeta);
      expect(sorensenDiceSimilarity(eta, theta)).to.equal(1 - etaTheta);
      expect(sorensenDiceSimilarity(iota, kappa)).to.equal(1 - iotaKappa);
      expect(sorensenDiceSimilarity(lambda, mu)).to.equal(1 - lambdaMu);
      expect(sorensenDiceSimilarity(nu, xi)).to.equal(1 - nuXi);
      expect(sorensenDiceSimilarity(omicron, pi)).to.equal(1 - omicronPi);
      expect(sorensenDiceSimilarity(rho, sigma)).to.equal(1 - rhoSigma);
      expect(sorensenDiceSimilarity(tau, upsilon)).to.equal(1 - tauUpsilon);
      expect(sorensenDiceSimilarity(phi, chi)).to.equal(1 - phiChi);
      expect(sorensenDiceSimilarity(psi, omega)).to.equal(1 - psiOmega);
      expect(sorensenDiceSimilarity(bravo, charlie)).to.equal(1 - bravoCharlie);
      expect(sorensenDiceSimilarity(echo, foxtrot)).to.equal(1 - echoFoxtrot);
      expect(sorensenDiceSimilarity(golf, hotel)).to.equal(1 - golfHotel);
      expect(sorensenDiceSimilarity(india, juliett)).to.equal(1 - indiaJuliett);
    });
  });
});
