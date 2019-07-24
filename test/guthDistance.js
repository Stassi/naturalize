/* eslint-disable no-empty-pattern */
import { expect } from 'chai';
import { describe } from 'mocha';
import { guthDistance } from '../src';
import samples from './samples';

const [
  {
    distances: {
      guth: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      guth: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      guth: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      guth: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      guth: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      guth: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      guth: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      guth: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      guth: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      guth: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      guth: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      guth: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      guth: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      guth: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      guth: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      guth: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('#guthDistance', () => {
  it('should return the Guth distance', () => {
    expect(guthDistance(alpha, beta)).to.equal(alphaBeta);
    expect(guthDistance(gamma, delta)).to.equal(gammaDelta);
    expect(guthDistance(epsilon, zeta)).to.equal(epsilonZeta);
    expect(guthDistance(eta, theta)).to.equal(etaTheta);
    expect(guthDistance(iota, kappa)).to.equal(iotaKappa);
    expect(guthDistance(lambda, mu)).to.equal(lambdaMu);
    expect(guthDistance(nu, xi)).to.equal(nuXi);
    expect(guthDistance(omicron, pi)).to.equal(omicronPi);
    expect(guthDistance(rho, sigma)).to.equal(rhoSigma);
    expect(guthDistance(tau, upsilon)).to.equal(tauUpsilon);
    expect(guthDistance(phi, chi)).to.equal(phiChi);
    expect(guthDistance(psi, omega)).to.equal(psiOmega);
    expect(guthDistance(bravo, charlie)).to.equal(bravoCharlie);
    expect(guthDistance(echo, foxtrot)).to.equal(echoFoxtrot);
    expect(guthDistance(golf, hotel)).to.equal(golfHotel);
    expect(guthDistance(india, juliett)).to.equal(indiaJuliett);
  });
});
