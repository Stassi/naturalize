import { expect } from 'chai';
import { describe } from 'mocha';
import { stringMetrics } from '../src';
import samples from './samples';

const [
  {
    distances: {
      lig2: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      lig2: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      lig2: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      lig2: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      lig2: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      lig2: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      lig2: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      lig2: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      lig2: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      lig2: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      lig2: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      lig2: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      lig2: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      lig2: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      lig2: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      lig2: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('#lig2Distance', () => {
  const name = 'lig2';
  const lig2Distance = stringMetrics({ name });

  it('should return the LIG2 distance', () => {
    expect(lig2Distance(alpha, beta)).to.equal(alphaBeta);
    expect(lig2Distance(gamma, delta)).to.equal(gammaDelta);
    expect(lig2Distance(epsilon, zeta)).to.equal(epsilonZeta);
    expect(lig2Distance(eta, theta)).to.equal(etaTheta);
    expect(lig2Distance(iota, kappa)).to.equal(iotaKappa);
    expect(lig2Distance(lambda, mu)).to.equal(lambdaMu);
    expect(lig2Distance(nu, xi)).to.equal(nuXi);
    expect(lig2Distance(omicron, pi)).to.equal(omicronPi);
    expect(lig2Distance(rho, sigma)).to.equal(rhoSigma);
    expect(lig2Distance(tau, upsilon)).to.equal(tauUpsilon);
    expect(lig2Distance(phi, chi)).to.equal(phiChi);
    expect(lig2Distance(psi, omega)).to.equal(psiOmega);
    expect(lig2Distance(bravo, charlie)).to.equal(bravoCharlie);
    expect(lig2Distance(echo, foxtrot)).to.equal(echoFoxtrot);
    expect(lig2Distance(golf, hotel)).to.equal(golfHotel);
    expect(lig2Distance(india, juliett)).to.equal(indiaJuliett);
  });
});
