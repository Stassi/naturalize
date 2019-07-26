import { expect } from 'chai';
import { describe } from 'mocha';
import { mongeElkanDistance as mongeElkanWithOptions } from '../src';
import samples from './samples';

const [
  {
    distances: {
      mongeElkan: alphaBeta,
    },
    sample: [
      alpha,
      beta,
    ],
  },
  {
    distances: {
      mongeElkan: gammaDelta,
    },
    sample: [
      gamma,
      delta,
    ],
  },
  {
    distances: {
      mongeElkan: epsilonZeta,
    },
    sample: [
      epsilon,
      zeta,
    ],
  },
  {
    distances: {
      mongeElkan: etaTheta,
    },
    sample: [
      eta,
      theta,
    ],
  },
  {
    distances: {
      mongeElkan: iotaKappa,
    },
    sample: [
      iota,
      kappa,
    ],
  },
  {
    distances: {
      mongeElkan: lambdaMu,
    },
    sample: [
      lambda,
      mu,
    ],
  },
  {
    distances: {
      mongeElkan: nuXi,
    },
    sample: [
      nu,
      xi,
    ],
  },
  {
    distances: {
      mongeElkan: omicronPi,
    },
    sample: [
      omicron,
      pi,
    ],
  },
  {
    distances: {
      mongeElkan: rhoSigma,
    },
    sample: [
      rho,
      sigma,
    ],
  },
  {
    distances: {
      mongeElkan: tauUpsilon,
    },
    sample: [
      tau,
      upsilon,
    ],
  },
  {
    distances: {
      mongeElkan: phiChi,
    },
    sample: [
      phi,
      chi,
    ],
  },
  {
    distances: {
      mongeElkan: psiOmega,
    },
    sample: [
      psi,
      omega,
    ],
  },
  {
    distances: {
      mongeElkan: bravoCharlie,
    },
    sample: [
      bravo,
      charlie,
    ],
  },
  {
    distances: {
      mongeElkan: echoFoxtrot,
    },
    sample: [
      echo,
      foxtrot,
    ],
  },
  {
    distances: {
      mongeElkan: golfHotel,
    },
    sample: [
      golf,
      hotel,
    ],
  },
  {
    distances: {
      mongeElkan: indiaJuliett,
    },
    sample: [
      india,
      juliett,
    ],
  },
] = samples;

describe('#mongeElkanDistance', () => {
  describe('with inner identity similarity', () => {
    const mongeElkanDistance = mongeElkanWithOptions();

    it('should return the Monge-Elkan distance', () => {
      expect(mongeElkanDistance(alpha, beta)).to.equal(alphaBeta);
      expect(mongeElkanDistance(gamma, delta)).to.equal(gammaDelta);
      expect(mongeElkanDistance(epsilon, zeta)).to.equal(epsilonZeta);
      expect(mongeElkanDistance(eta, theta)).to.equal(etaTheta);
      expect(mongeElkanDistance(iota, kappa)).to.equal(iotaKappa);
      expect(mongeElkanDistance(lambda, mu)).to.equal(lambdaMu);
      expect(mongeElkanDistance(nu, xi)).to.equal(nuXi);
      expect(mongeElkanDistance(omicron, pi)).to.equal(omicronPi);
      expect(mongeElkanDistance(rho, sigma)).to.equal(rhoSigma);
      expect(mongeElkanDistance(tau, upsilon)).to.equal(tauUpsilon);
      expect(mongeElkanDistance(phi, chi)).to.equal(phiChi);
      expect(mongeElkanDistance(psi, omega)).to.equal(psiOmega);
      expect(mongeElkanDistance(bravo, charlie)).to.equal(bravoCharlie);
      expect(mongeElkanDistance(echo, foxtrot)).to.equal(echoFoxtrot);
      expect(mongeElkanDistance(golf, hotel)).to.equal(golfHotel);
      expect(mongeElkanDistance(india, juliett)).to.equal(indiaJuliett);
    });
  });
});
