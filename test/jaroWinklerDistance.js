import { expect } from 'chai';
import { describe } from 'mocha';
import { jaroWinklerDistance } from '../src';
import samples from './samples';

const [
  {
    distances: {
      jaroWinkler: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      jaroWinkler: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      jaroWinkler: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      jaroWinkler: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      jaroWinkler: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      jaroWinkler: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      jaroWinkler: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      jaroWinkler: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      jaroWinkler: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      jaroWinkler: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      jaroWinkler: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      jaroWinkler: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      jaroWinkler: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      jaroWinkler: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      jaroWinkler: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      jaroWinkler: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('#jaroWinklerDistance', () => {
  it('should return the Jaro–Winkler distance', () => {
    expect(jaroWinklerDistance(alpha, beta)).to.equal(alphaBeta);
    expect(jaroWinklerDistance(gamma, delta)).to.equal(gammaDelta);
    expect(jaroWinklerDistance(epsilon, zeta)).to.equal(epsilonZeta);
    expect(jaroWinklerDistance(epsilon, zeta)).to.equal(epsilonZeta);
    expect(jaroWinklerDistance(eta, theta)).to.equal(etaTheta);
    expect(jaroWinklerDistance(iota, kappa)).to.equal(iotaKappa);
    expect(jaroWinklerDistance(lambda, mu)).to.equal(lambdaMu);
    expect(jaroWinklerDistance(nu, xi)).to.equal(nuXi);
    expect(jaroWinklerDistance(omicron, pi)).to.equal(omicronPi);
    expect(jaroWinklerDistance(rho, sigma)).to.equal(rhoSigma);
    expect(jaroWinklerDistance(tau, upsilon)).to.equal(tauUpsilon);
    expect(jaroWinklerDistance(phi, chi)).to.equal(phiChi);
    expect(jaroWinklerDistance(psi, omega)).to.equal(psiOmega);
    expect(jaroWinklerDistance(bravo, charlie)).to.equal(bravoCharlie);
    expect(jaroWinklerDistance(echo, foxtrot)).to.equal(echoFoxtrot);
    expect(jaroWinklerDistance(golf, hotel)).to.equal(golfHotel);
    expect(jaroWinklerDistance(india, juliett)).to.equal(indiaJuliett);
  });
});
