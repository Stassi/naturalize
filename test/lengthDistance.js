import { expect } from 'chai';
import { describe } from 'mocha';
import { lengthDistance } from '../src';
import samples from './samples';

const [
  {
    distances: {
      length: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      length: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      length: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      length: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      length: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      length: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      length: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      length: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      length: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      length: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      length: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      length: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      length: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      length: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      length: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      length: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('#lengthDistance', () => {
  it('should return the length distance', () => {
    expect(lengthDistance(alpha, beta)).to.equal(alphaBeta);
    expect(lengthDistance(gamma, delta)).to.equal(gammaDelta);
    expect(lengthDistance(epsilon, zeta)).to.equal(epsilonZeta);
    expect(lengthDistance(eta, theta)).to.equal(etaTheta);
    expect(lengthDistance(iota, kappa)).to.equal(iotaKappa);
    expect(lengthDistance(lambda, mu)).to.equal(lambdaMu);
    expect(lengthDistance(nu, xi)).to.equal(nuXi);
    expect(lengthDistance(omicron, pi)).to.equal(omicronPi);
    expect(lengthDistance(rho, sigma)).to.equal(rhoSigma);
    expect(lengthDistance(tau, upsilon)).to.equal(tauUpsilon);
    expect(lengthDistance(phi, chi)).to.equal(phiChi);
    expect(lengthDistance(psi, omega)).to.equal(psiOmega);
    expect(lengthDistance(bravo, charlie)).to.equal(bravoCharlie);
    expect(lengthDistance(echo, foxtrot)).to.equal(echoFoxtrot);
    expect(lengthDistance(golf, hotel)).to.equal(golfHotel);
    expect(lengthDistance(india, juliett)).to.equal(indiaJuliett);
  });
});
