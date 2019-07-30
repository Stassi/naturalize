import { expect } from 'chai';
import { describe } from 'mocha';
import { stringMetrics } from '../src';
import samples from './samples';

const [
  {
    distances: {
      bag: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      bag: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      bag: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      bag: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      bag: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      bag: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      bag: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      bag: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      bag: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      bag: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      bag: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      bag: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      bag: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      bag: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      bag: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      bag: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('#bagDistance', () => {
  const name = 'bag';
  const bagDistance = stringMetrics({ name });

  describe('as similarity', () => {
    const bagSimilarity = stringMetrics({ name, asSimilarity: true });

    it('should return the bag similarity', () => {
      expect(bagSimilarity(alpha, beta)).to.equal(1 - alphaBeta);
    });
  });

  it('should return the bag distance', () => {
    expect(bagDistance(alpha, beta)).to.equal(alphaBeta);
    expect(bagDistance(gamma, delta)).to.equal(gammaDelta);
    expect(bagDistance(epsilon, zeta)).to.equal(epsilonZeta);
    expect(bagDistance(eta, theta)).to.equal(etaTheta);
    expect(bagDistance(iota, kappa)).to.equal(iotaKappa);
    expect(bagDistance(lambda, mu)).to.equal(lambdaMu);
    expect(bagDistance(nu, xi)).to.equal(nuXi);
    expect(bagDistance(omicron, pi)).to.equal(omicronPi);
    expect(bagDistance(rho, sigma)).to.equal(rhoSigma);
    expect(bagDistance(tau, upsilon)).to.equal(tauUpsilon);
    expect(bagDistance(phi, chi)).to.equal(phiChi);
    expect(bagDistance(psi, omega)).to.equal(psiOmega);
    expect(bagDistance(bravo, charlie)).to.equal(bravoCharlie);
    expect(bagDistance(echo, foxtrot)).to.equal(echoFoxtrot);
    expect(bagDistance(golf, hotel)).to.equal(golfHotel);
    expect(bagDistance(india, juliett)).to.equal(indiaJuliett);
  });
});
