/* eslint-disable no-empty-pattern */
import { expect } from 'chai';
import { describe } from 'mocha';
import { mraComparison } from '../src';
import samples from './samples';

const [
  {
    distances: {
      mra: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      mra: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      mra: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      mra: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      mra: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      mra: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      mra: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      mra: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      mra: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      mra: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      mra: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      mra: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      mra: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      mra: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      mra: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      mra: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('#mraComparison', () => {
  it('should return the Match Rating Approach (MRA) comparison', () => {
    expect(mraComparison(alpha, beta)).to.deep.equal(alphaBeta);
    expect(mraComparison(gamma, delta)).to.deep.equal(gammaDelta);
    expect(mraComparison(epsilon, zeta)).to.deep.equal(epsilonZeta);
    expect(mraComparison(eta, theta)).to.deep.equal(etaTheta);
    expect(mraComparison(iota, kappa)).to.deep.equal(iotaKappa);
    expect(mraComparison(lambda, mu)).to.deep.equal(lambdaMu);
    expect(mraComparison(nu, xi)).to.deep.equal(nuXi);
    expect(mraComparison(omicron, pi)).to.deep.equal(omicronPi);
    expect(mraComparison(rho, sigma)).to.deep.equal(rhoSigma);
    expect(mraComparison(tau, upsilon)).to.deep.equal(tauUpsilon);
    expect(mraComparison(phi, chi)).to.deep.equal(phiChi);
    expect(mraComparison(psi, omega)).to.deep.equal(psiOmega);
    expect(mraComparison(bravo, charlie)).to.deep.equal(bravoCharlie);
    expect(mraComparison(echo, foxtrot)).to.deep.equal(echoFoxtrot);
    expect(mraComparison(golf, hotel)).to.deep.equal(golfHotel);
    expect(mraComparison(india, juliett)).to.deep.equal(indiaJuliett);
  });
});
