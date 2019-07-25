/* eslint-disable no-empty-pattern */
import { expect } from 'chai';
import { describe } from 'mocha';
import { smithWatermanDistance } from '../src';
import samples from './samples';

const [
  {
    distances: {
      smithWaterman: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      smithWaterman: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      smithWaterman: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      smithWaterman: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      smithWaterman: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      smithWaterman: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      smithWaterman: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      smithWaterman: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      smithWaterman: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      smithWaterman: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      smithWaterman: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      smithWaterman: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      smithWaterman: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      smithWaterman: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      smithWaterman: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      smithWaterman: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('#smithWatermanDistance', () => {
  it('should return the Smith–Waterman distance', () => {
    expect(smithWatermanDistance(alpha, beta)).to.equal(alphaBeta);
    expect(smithWatermanDistance(gamma, delta)).to.equal(gammaDelta);
    expect(smithWatermanDistance(epsilon, zeta)).to.equal(epsilonZeta);
    expect(smithWatermanDistance(eta, theta)).to.equal(etaTheta);
    expect(smithWatermanDistance(iota, kappa)).to.equal(iotaKappa);
    expect(smithWatermanDistance(lambda, mu)).to.equal(lambdaMu);
    expect(smithWatermanDistance(nu, xi)).to.equal(nuXi);
    expect(smithWatermanDistance(omicron, pi)).to.equal(omicronPi);
    expect(smithWatermanDistance(rho, sigma)).to.equal(rhoSigma);
    expect(smithWatermanDistance(tau, upsilon)).to.equal(tauUpsilon);
    expect(smithWatermanDistance(phi, chi)).to.equal(phiChi);
    expect(smithWatermanDistance(psi, omega)).to.equal(psiOmega);
    expect(smithWatermanDistance(bravo, charlie)).to.equal(bravoCharlie);
    expect(smithWatermanDistance(echo, foxtrot)).to.equal(echoFoxtrot);
    expect(smithWatermanDistance(golf, hotel)).to.equal(golfHotel);
    expect(smithWatermanDistance(india, juliett)).to.equal(indiaJuliett);
  });
});
