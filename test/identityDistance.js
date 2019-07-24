/* eslint-disable no-empty-pattern */
import { expect } from 'chai';
import { describe } from 'mocha';
import { identityDistance } from '../src';
import samples from './samples';

const [
  {
    distances: {
      identity: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      identity: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      identity: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      identity: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      identity: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      identity: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      identity: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      identity: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      identity: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      identity: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      identity: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      identity: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      identity: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      identity: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      identity: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      identity: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('#identityDistance', () => {
  it('should return the identity distance', () => {
    expect(identityDistance(alpha, beta)).to.equal(alphaBeta);
    expect(identityDistance(gamma, delta)).to.equal(gammaDelta);
    expect(identityDistance(epsilon, zeta)).to.equal(epsilonZeta);
    expect(identityDistance(eta, theta)).to.equal(etaTheta);
    expect(identityDistance(iota, kappa)).to.equal(iotaKappa);
    expect(identityDistance(lambda, mu)).to.equal(lambdaMu);
    expect(identityDistance(nu, xi)).to.equal(nuXi);
    expect(identityDistance(omicron, pi)).to.equal(omicronPi);
    expect(identityDistance(rho, sigma)).to.equal(rhoSigma);
    expect(identityDistance(tau, upsilon)).to.equal(tauUpsilon);
    expect(identityDistance(phi, chi)).to.equal(phiChi);
    expect(identityDistance(psi, omega)).to.equal(psiOmega);
    expect(identityDistance(bravo, charlie)).to.equal(bravoCharlie);
    expect(identityDistance(echo, foxtrot)).to.equal(echoFoxtrot);
    expect(identityDistance(golf, hotel)).to.equal(golfHotel);
    expect(identityDistance(india, juliett)).to.equal(indiaJuliett);
  });
});
