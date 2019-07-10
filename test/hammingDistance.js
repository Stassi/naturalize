import { expect } from 'chai';
import { describe } from 'mocha';
import { hammingDistance } from '../src';
import { hammingDistances as hammingDistanceSamples } from './samples';

describe('#hammingDistance', () => {
  const [
    [alpha, beta, alphaBeta],
    [gamma, delta, gammaDelta],
    [epsilon, zeta, epsilonZeta],
    [eta, theta, etaTheta],
  ] = hammingDistanceSamples;

  describe('provided strings of equal length', () => {
    it('should return the Hamming distance between the inputs', () => {
      expect(hammingDistance(alpha, beta)).to.equal(alphaBeta);
      expect(hammingDistance(gamma, delta)).to.equal(gammaDelta);
      expect(hammingDistance(epsilon, zeta)).to.equal(epsilonZeta);
      expect(hammingDistance(eta, theta)).to.equal(etaTheta);
    });
  });
});
