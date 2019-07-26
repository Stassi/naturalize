import { expect } from 'chai';
import { describe } from 'mocha';
import { jaccardDistance } from '../src';
import samples from './samples';

const [
  {
    distances: {
      jaccard: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      jaccard: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      jaccard: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      jaccard: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      jaccard: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      jaccard: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      jaccard: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      jaccard: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      jaccard: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      jaccard: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      jaccard: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      jaccard: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      jaccard: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      jaccard: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      jaccard: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      jaccard: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('#jaccardDistance', () => {
  it('should return the Jaccard distance', () => {
    expect(jaccardDistance(alpha, beta)).to.equal(alphaBeta);
    expect(jaccardDistance(gamma, delta)).to.equal(gammaDelta);
    expect(jaccardDistance(epsilon, zeta)).to.equal(epsilonZeta);
    expect(jaccardDistance(eta, theta)).to.equal(etaTheta);
    expect(jaccardDistance(iota, kappa)).to.equal(iotaKappa);
    expect(jaccardDistance(lambda, mu)).to.equal(lambdaMu);
    expect(jaccardDistance(nu, xi)).to.equal(nuXi);
    expect(jaccardDistance(omicron, pi)).to.equal(omicronPi);
    expect(jaccardDistance(rho, sigma)).to.equal(rhoSigma);
    expect(jaccardDistance(tau, upsilon)).to.equal(tauUpsilon);
    expect(jaccardDistance(phi, chi)).to.equal(phiChi);
    expect(jaccardDistance(psi, omega)).to.equal(psiOmega);
    expect(jaccardDistance(bravo, charlie)).to.equal(bravoCharlie);
    expect(jaccardDistance(echo, foxtrot)).to.equal(echoFoxtrot);
    expect(jaccardDistance(golf, hotel)).to.equal(golfHotel);
    expect(jaccardDistance(india, juliett)).to.equal(indiaJuliett);
  });
});
