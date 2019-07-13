import { expect } from 'chai';
import { describe } from 'mocha';
import { diceCoefficient } from '../src';
import samples from './samples';

const [
  {
    distances: {
      dice: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      dice: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      dice: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      dice: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      dice: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      dice: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      dice: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      dice: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      dice: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      dice: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      dice: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      dice: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      dice: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      dice: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      dice: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      dice: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('#diceCoefficient', () => {
  it('should return the Dice coefficient', () => {
    expect(diceCoefficient(alpha, beta)).to.equal(alphaBeta);
    expect(diceCoefficient(gamma, delta)).to.equal(gammaDelta);
    expect(diceCoefficient(epsilon, zeta)).to.equal(epsilonZeta);
    expect(diceCoefficient(eta, theta)).to.equal(etaTheta);
    expect(diceCoefficient(iota, kappa)).to.equal(iotaKappa);
    expect(diceCoefficient(lambda, mu)).to.equal(lambdaMu);
    expect(diceCoefficient(nu, xi)).to.equal(nuXi);
    expect(diceCoefficient(omicron, pi)).to.equal(omicronPi);
    expect(diceCoefficient(rho, sigma)).to.equal(rhoSigma);
    expect(diceCoefficient(tau, upsilon)).to.equal(tauUpsilon);
    expect(diceCoefficient(phi, chi)).to.equal(phiChi);
    expect(diceCoefficient(psi, omega)).to.equal(psiOmega);
    expect(diceCoefficient(bravo, charlie)).to.equal(bravoCharlie);
    expect(diceCoefficient(echo, foxtrot)).to.equal(echoFoxtrot);
    expect(diceCoefficient(golf, hotel)).to.equal(golfHotel);
    expect(diceCoefficient(india, juliett)).to.equal(indiaJuliett);
  });
});
