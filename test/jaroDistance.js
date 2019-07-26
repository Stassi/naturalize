import { expect } from 'chai';
import { describe } from 'mocha';
import { jaroDistance } from '../src';
import samples from './samples';

const [
  {
    distances: {
      jaro: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      jaro: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      jaro: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      jaro: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      jaro: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      jaro: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      jaro: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      jaro: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      jaro: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      jaro: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      jaro: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      jaro: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      jaro: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      jaro: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      jaro: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      jaro: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('#jaroDistance', () => {
  it('should return the Jaro distance', () => {
    expect(jaroDistance(alpha, beta)).to.equal(alphaBeta);
    expect(jaroDistance(gamma, delta)).to.equal(gammaDelta);
    expect(jaroDistance(epsilon, zeta)).to.equal(epsilonZeta);
    expect(jaroDistance(eta, theta)).to.equal(etaTheta);
    expect(jaroDistance(iota, kappa)).to.equal(iotaKappa);
    expect(jaroDistance(lambda, mu)).to.equal(lambdaMu);
    expect(jaroDistance(nu, xi)).to.equal(nuXi);
    expect(jaroDistance(omicron, pi)).to.equal(omicronPi);
    expect(jaroDistance(rho, sigma)).to.equal(rhoSigma);
    expect(jaroDistance(tau, upsilon)).to.equal(tauUpsilon);
    expect(jaroDistance(phi, chi)).to.equal(phiChi);
    expect(jaroDistance(psi, omega)).to.equal(psiOmega);
    expect(jaroDistance(bravo, charlie)).to.equal(bravoCharlie);
    expect(jaroDistance(echo, foxtrot)).to.equal(echoFoxtrot);
    expect(jaroDistance(golf, hotel)).to.equal(golfHotel);
    expect(jaroDistance(india, juliett)).to.equal(indiaJuliett);
  });
});
