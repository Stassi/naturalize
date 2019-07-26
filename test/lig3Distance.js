import { expect } from 'chai';
import { describe } from 'mocha';
import { lig3Distance } from '../src';
import samples from './samples';

const [
  {
    distances: {
      lig3: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      lig3: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      lig3: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      lig3: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      lig3: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      lig3: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      lig3: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      lig3: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      lig3: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      lig3: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      lig3: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      lig3: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      lig3: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      lig3: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      lig3: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      lig3: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('#lig3Distance', () => {
  it('should return the LIG3 distance', () => {
    expect(lig3Distance(alpha, beta)).to.equal(alphaBeta);
    expect(lig3Distance(gamma, delta)).to.equal(gammaDelta);
    expect(lig3Distance(epsilon, zeta)).to.equal(epsilonZeta);
    expect(lig3Distance(eta, theta)).to.equal(etaTheta);
    expect(lig3Distance(iota, kappa)).to.equal(iotaKappa);
    expect(lig3Distance(lambda, mu)).to.equal(lambdaMu);
    expect(lig3Distance(nu, xi)).to.equal(nuXi);
    expect(lig3Distance(omicron, pi)).to.equal(omicronPi);
    expect(lig3Distance(rho, sigma)).to.equal(rhoSigma);
    expect(lig3Distance(tau, upsilon)).to.equal(tauUpsilon);
    expect(lig3Distance(phi, chi)).to.equal(phiChi);
    expect(lig3Distance(psi, omega)).to.equal(psiOmega);
    expect(lig3Distance(bravo, charlie)).to.equal(bravoCharlie);
    expect(lig3Distance(echo, foxtrot)).to.equal(echoFoxtrot);
    expect(lig3Distance(golf, hotel)).to.equal(golfHotel);
    expect(lig3Distance(india, juliett)).to.equal(indiaJuliett);
  });
});
