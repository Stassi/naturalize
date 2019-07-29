import { expect } from 'chai';
import { describe } from 'mocha';
import { stringMetrics } from '../src';
import samples from './samples';

const [
  {
    distances: {
      tversky: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      tversky: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      tversky: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      tversky: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      tversky: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      tversky: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      tversky: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      tversky: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      tversky: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      tversky: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      tversky: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      tversky: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      tversky: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      tversky: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      tversky: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      tversky: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('#tverskyDistance', () => {
  const name = 'tversky';
  const tverskyDistance = stringMetrics({ name });

  describe('with default options', () => {
    it('should return the Tversky distance', () => {
      expect(tverskyDistance(alpha, beta)).to.equal(alphaBeta);
      expect(tverskyDistance(gamma, delta)).to.equal(gammaDelta);
      expect(tverskyDistance(epsilon, zeta)).to.equal(epsilonZeta);
      expect(tverskyDistance(eta, theta)).to.equal(etaTheta);
      expect(tverskyDistance(iota, kappa)).to.equal(iotaKappa);
      expect(tverskyDistance(lambda, mu)).to.equal(lambdaMu);
      expect(tverskyDistance(nu, xi)).to.equal(nuXi);
      expect(tverskyDistance(omicron, pi)).to.equal(omicronPi);
      expect(tverskyDistance(rho, sigma)).to.equal(rhoSigma);
      expect(tverskyDistance(tau, upsilon)).to.equal(tauUpsilon);
      expect(tverskyDistance(phi, chi)).to.equal(phiChi);
      expect(tverskyDistance(psi, omega)).to.equal(psiOmega);
      expect(tverskyDistance(bravo, charlie)).to.equal(bravoCharlie);
      expect(tverskyDistance(echo, foxtrot)).to.equal(echoFoxtrot);
      expect(tverskyDistance(golf, hotel)).to.equal(golfHotel);
      expect(tverskyDistance(india, juliett)).to.equal(indiaJuliett);
    });
  });
});
