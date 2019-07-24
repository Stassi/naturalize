import { expect } from 'chai';
import { describe } from 'mocha';
import { sorensenDiceCoefficient } from '../src';
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
