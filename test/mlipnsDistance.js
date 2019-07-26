import { expect } from 'chai';
import { describe } from 'mocha';
import { mlipnsDistance } from '../src';
import samples from './samples';

const [
  {
    distances: {
      mlipns: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      mlipns: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      mlipns: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      mlipns: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      mlipns: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      mlipns: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      mlipns: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      mlipns: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      mlipns: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      mlipns: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      mlipns: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      mlipns: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      mlipns: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      mlipns: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      mlipns: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      mlipns: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('#mlipnsDistance', () => {
  it('should return the Modified Language-Independent Product Name Search (MLIPNS) distance', () => {
    expect(mlipnsDistance(alpha, beta)).to.equal(alphaBeta);
    expect(mlipnsDistance(gamma, delta)).to.equal(gammaDelta);
    expect(mlipnsDistance(epsilon, zeta)).to.equal(epsilonZeta);
    expect(mlipnsDistance(eta, theta)).to.equal(etaTheta);
    expect(mlipnsDistance(iota, kappa)).to.equal(iotaKappa);
    expect(mlipnsDistance(lambda, mu)).to.equal(lambdaMu);
    expect(mlipnsDistance(nu, xi)).to.equal(nuXi);
    expect(mlipnsDistance(omicron, pi)).to.equal(omicronPi);
    expect(mlipnsDistance(rho, sigma)).to.equal(rhoSigma);
    expect(mlipnsDistance(tau, upsilon)).to.equal(tauUpsilon);
    expect(mlipnsDistance(phi, chi)).to.equal(phiChi);
    expect(mlipnsDistance(psi, omega)).to.equal(psiOmega);
    expect(mlipnsDistance(bravo, charlie)).to.equal(bravoCharlie);
    expect(mlipnsDistance(echo, foxtrot)).to.equal(echoFoxtrot);
    expect(mlipnsDistance(golf, hotel)).to.equal(golfHotel);
    expect(mlipnsDistance(india, juliett)).to.equal(indiaJuliett);
  });
});
