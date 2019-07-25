/* eslint-disable no-empty-pattern */
import { expect } from 'chai';
import { describe } from 'mocha';
import { overlapDistance } from '../src';
import samples from './samples';

const [
  {
    distances: {
      overlap: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      overlap: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      overlap: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      overlap: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      overlap: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      overlap: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      overlap: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      overlap: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      overlap: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      overlap: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      overlap: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      overlap: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      overlap: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      overlap: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      overlap: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      overlap: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('#overlapDistance', () => {
  it('should return the overlap distance', () => {
    expect(overlapDistance(alpha, beta)).to.equal(alphaBeta);
    expect(overlapDistance(gamma, delta)).to.equal(gammaDelta);
    expect(overlapDistance(epsilon, zeta)).to.equal(epsilonZeta);
    expect(overlapDistance(eta, theta)).to.equal(etaTheta);
    expect(overlapDistance(iota, kappa)).to.equal(iotaKappa);
    expect(overlapDistance(lambda, mu)).to.equal(lambdaMu);
    expect(overlapDistance(nu, xi)).to.equal(nuXi);
    expect(overlapDistance(omicron, pi)).to.equal(omicronPi);
    expect(overlapDistance(rho, sigma)).to.equal(rhoSigma);
    expect(overlapDistance(tau, upsilon)).to.equal(tauUpsilon);
    expect(overlapDistance(phi, chi)).to.equal(phiChi);
    expect(overlapDistance(psi, omega)).to.equal(psiOmega);
    expect(overlapDistance(bravo, charlie)).to.equal(bravoCharlie);
    expect(overlapDistance(echo, foxtrot)).to.equal(echoFoxtrot);
    expect(overlapDistance(golf, hotel)).to.equal(golfHotel);
    expect(overlapDistance(india, juliett)).to.equal(indiaJuliett);
  });
});
