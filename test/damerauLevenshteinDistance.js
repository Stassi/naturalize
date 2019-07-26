import { expect } from 'chai';
import { describe } from 'mocha';
import { stringMetrics } from '../src';
import samples from './samples';

const [
  {
    distances: {
      damerauLevenshtein: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      damerauLevenshtein: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      damerauLevenshtein: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      damerauLevenshtein: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      damerauLevenshtein: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      damerauLevenshtein: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      damerauLevenshtein: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      damerauLevenshtein: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      damerauLevenshtein: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      damerauLevenshtein: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      damerauLevenshtein: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      damerauLevenshtein: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      damerauLevenshtein: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      damerauLevenshtein: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      damerauLevenshtein: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      damerauLevenshtein: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('#damerauLevenshteinDistance', () => {
  const name = 'damerauLevenshtein';
  const damerauLevenshteinDistance = stringMetrics({ name });

  it('should return the Damerau–Levenshtein distance', () => {
    expect(damerauLevenshteinDistance(alpha, beta)).to.equal(alphaBeta);
    expect(damerauLevenshteinDistance(gamma, delta)).to.equal(gammaDelta);
    expect(damerauLevenshteinDistance(epsilon, zeta)).to.equal(epsilonZeta);
    expect(damerauLevenshteinDistance(eta, theta)).to.equal(etaTheta);
    expect(damerauLevenshteinDistance(iota, kappa)).to.equal(iotaKappa);
    expect(damerauLevenshteinDistance(lambda, mu)).to.equal(lambdaMu);
    expect(damerauLevenshteinDistance(nu, xi)).to.equal(nuXi);
    expect(damerauLevenshteinDistance(omicron, pi)).to.equal(omicronPi);
    expect(damerauLevenshteinDistance(rho, sigma)).to.equal(rhoSigma);
    expect(damerauLevenshteinDistance(tau, upsilon)).to.equal(tauUpsilon);
    expect(damerauLevenshteinDistance(phi, chi)).to.equal(phiChi);
    expect(damerauLevenshteinDistance(psi, omega)).to.equal(psiOmega);
    expect(damerauLevenshteinDistance(bravo, charlie)).to.equal(bravoCharlie);
    expect(damerauLevenshteinDistance(echo, foxtrot)).to.equal(echoFoxtrot);
    expect(damerauLevenshteinDistance(golf, hotel)).to.equal(golfHotel);
    expect(damerauLevenshteinDistance(india, juliett)).to.equal(indiaJuliett);
  });
});
