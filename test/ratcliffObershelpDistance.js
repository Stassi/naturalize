/* eslint-disable no-empty-pattern */
import { expect } from 'chai';
import { describe } from 'mocha';
import { ratcliffObershelpDistance } from '../src';
import samples from './samples';

const [
  {
    distances: {
      ratcliffObershelp: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      ratcliffObershelp: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      ratcliffObershelp: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      ratcliffObershelp: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      ratcliffObershelp: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      ratcliffObershelp: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      ratcliffObershelp: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      ratcliffObershelp: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      ratcliffObershelp: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      ratcliffObershelp: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      ratcliffObershelp: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      ratcliffObershelp: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      ratcliffObershelp: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      ratcliffObershelp: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      ratcliffObershelp: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      ratcliffObershelp: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('#ratcliffObershelpDistance', () => {
  it('should return the Ratcliff-Obershelp distance', () => {
    expect(ratcliffObershelpDistance(alpha, beta)).to.equal(alphaBeta);
    expect(ratcliffObershelpDistance(gamma, delta)).to.equal(gammaDelta);
    expect(ratcliffObershelpDistance(epsilon, zeta)).to.equal(epsilonZeta);
    expect(ratcliffObershelpDistance(eta, theta)).to.equal(etaTheta);
    expect(ratcliffObershelpDistance(iota, kappa)).to.equal(iotaKappa);
    expect(ratcliffObershelpDistance(lambda, mu)).to.equal(lambdaMu);
    expect(ratcliffObershelpDistance(nu, xi)).to.equal(nuXi);
    expect(ratcliffObershelpDistance(omicron, pi)).to.equal(omicronPi);
    expect(ratcliffObershelpDistance(rho, sigma)).to.equal(rhoSigma);
    expect(ratcliffObershelpDistance(tau, upsilon)).to.equal(tauUpsilon);
    expect(ratcliffObershelpDistance(phi, chi)).to.equal(phiChi);
    expect(ratcliffObershelpDistance(psi, omega)).to.equal(psiOmega);
    expect(ratcliffObershelpDistance(bravo, charlie)).to.equal(bravoCharlie);
    expect(ratcliffObershelpDistance(echo, foxtrot)).to.equal(echoFoxtrot);
    expect(ratcliffObershelpDistance(golf, hotel)).to.equal(golfHotel);
    expect(ratcliffObershelpDistance(india, juliett)).to.equal(indiaJuliett);
  });
});
