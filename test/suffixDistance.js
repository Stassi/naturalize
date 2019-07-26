import { expect } from 'chai';
import { describe } from 'mocha';
import { suffixDistance } from '../src';
import samples from './samples';

const [
  {
    distances: {
      suffix: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      suffix: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      suffix: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      suffix: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      suffix: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      suffix: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      suffix: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      suffix: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      suffix: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      suffix: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      suffix: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      suffix: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      suffix: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      suffix: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      suffix: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      suffix: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('#suffixDistance', () => {
  it('should return the suffix distance', () => {
    expect(suffixDistance(alpha, beta)).to.equal(alphaBeta);
    expect(suffixDistance(gamma, delta)).to.equal(gammaDelta);
    expect(suffixDistance(epsilon, zeta)).to.equal(epsilonZeta);
    expect(suffixDistance(eta, theta)).to.equal(etaTheta);
    expect(suffixDistance(iota, kappa)).to.equal(iotaKappa);
    expect(suffixDistance(lambda, mu)).to.equal(lambdaMu);
    expect(suffixDistance(nu, xi)).to.equal(nuXi);
    expect(suffixDistance(omicron, pi)).to.equal(omicronPi);
    expect(suffixDistance(rho, sigma)).to.equal(rhoSigma);
    expect(suffixDistance(tau, upsilon)).to.equal(tauUpsilon);
    expect(suffixDistance(phi, chi)).to.equal(phiChi);
    expect(suffixDistance(psi, omega)).to.equal(psiOmega);
    expect(suffixDistance(bravo, charlie)).to.equal(bravoCharlie);
    expect(suffixDistance(echo, foxtrot)).to.equal(echoFoxtrot);
    expect(suffixDistance(golf, hotel)).to.equal(golfHotel);
    expect(suffixDistance(india, juliett)).to.equal(indiaJuliett);
  });
});
