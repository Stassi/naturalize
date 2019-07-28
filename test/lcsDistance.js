import { expect } from 'chai';
import { describe } from 'mocha';
import { stringMetrics } from '../src';
import samples from './samples';

const [
  {
    distances: {
      lcs: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      lcs: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      lcs: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      lcs: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      lcs: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      lcs: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      lcs: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      lcs: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      lcs: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      lcs: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      lcs: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      lcs: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      lcs: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      lcs: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      lcs: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      lcs: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('#lcsDistance', () => {
  const name = 'lcs';
  const lcsDistance = stringMetrics({ name });

  it('should return the Longest Common Subsequence (LCS) distance', () => {
    expect(lcsDistance(alpha, beta)).to.equal(alphaBeta);
    expect(lcsDistance(gamma, delta)).to.equal(gammaDelta);
    expect(lcsDistance(epsilon, zeta)).to.equal(epsilonZeta);
    expect(lcsDistance(eta, theta)).to.equal(etaTheta);
    expect(lcsDistance(iota, kappa)).to.equal(iotaKappa);
    expect(lcsDistance(lambda, mu)).to.equal(lambdaMu);
    expect(lcsDistance(nu, xi)).to.equal(nuXi);
    expect(lcsDistance(omicron, pi)).to.equal(omicronPi);
    expect(lcsDistance(rho, sigma)).to.equal(rhoSigma);
    expect(lcsDistance(tau, upsilon)).to.equal(tauUpsilon);
    expect(lcsDistance(phi, chi)).to.equal(phiChi);
    expect(lcsDistance(psi, omega)).to.equal(psiOmega);
    expect(lcsDistance(bravo, charlie)).to.equal(bravoCharlie);
    expect(lcsDistance(echo, foxtrot)).to.equal(echoFoxtrot);
    expect(lcsDistance(golf, hotel)).to.equal(golfHotel);
    expect(lcsDistance(india, juliett)).to.equal(indiaJuliett);
  });
});
