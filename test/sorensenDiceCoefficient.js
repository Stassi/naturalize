import { expect } from 'chai';
import { describe } from 'mocha';
import { sorensenDiceCoefficient } from '../src';
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

describe('#sorensenDiceCoefficient', () => {
  it('should return the Sørensen–Dice coefficient', () => {
    expect(sorensenDiceCoefficient(alpha, beta)).to.equal(alphaBeta);
    expect(sorensenDiceCoefficient(gamma, delta)).to.equal(gammaDelta);
    expect(sorensenDiceCoefficient(epsilon, zeta)).to.equal(epsilonZeta);
    expect(sorensenDiceCoefficient(eta, theta)).to.equal(etaTheta);
    expect(sorensenDiceCoefficient(iota, kappa)).to.equal(iotaKappa);
    expect(sorensenDiceCoefficient(lambda, mu)).to.equal(lambdaMu);
    expect(sorensenDiceCoefficient(nu, xi)).to.equal(nuXi);
    expect(sorensenDiceCoefficient(omicron, pi)).to.equal(omicronPi);
    expect(sorensenDiceCoefficient(rho, sigma)).to.equal(rhoSigma);
    expect(sorensenDiceCoefficient(tau, upsilon)).to.equal(tauUpsilon);
    expect(sorensenDiceCoefficient(phi, chi)).to.equal(phiChi);
    expect(sorensenDiceCoefficient(psi, omega)).to.equal(psiOmega);
    expect(sorensenDiceCoefficient(bravo, charlie)).to.equal(bravoCharlie);
    expect(sorensenDiceCoefficient(echo, foxtrot)).to.equal(echoFoxtrot);
    expect(sorensenDiceCoefficient(golf, hotel)).to.equal(golfHotel);
    expect(sorensenDiceCoefficient(india, juliett)).to.equal(indiaJuliett);
  });
});
