import { expect } from 'chai';
import { describe } from 'mocha';
import { stringMetrics } from '../src';
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

describe('#sorensenDiceDistance', () => {
  const name = 'sorensenDice';
  const sorensenDiceDistance = stringMetrics({ name });

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
