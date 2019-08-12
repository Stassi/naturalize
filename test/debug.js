import { expect } from 'chai';
import { describe } from 'mocha';
import {
  percentileDistances as invertibleDistances,
} from '../src/stringMetrics/distances';
import debug from '../src/debug';

// TODO: Remove
const [alpha, beta] = ['example', 'samples'];

// TODO: Rename
describe('untitled invertible distances reducer', () => {
  const debugInvertibleDistances = debug({ names: invertibleDistances });

  it('needs a description', () => {
    expect(debugInvertibleDistances(alpha, beta)).to.deep.equal({
      identity: 1,
      jaccard: 0.2857142857142857,
      jaro: 0.19047619047619035,
      jaroWinkler: 0.19047619047619035,
      lcs: 0.2857142857142857,
      length: 0,
      lig2: 0.4285714285714286,
      lig3: 0.2727272727272727,
      minHash: 1,
      mlipns: 0,
      mongeElkan: 0.8571428571428571,
      overlap: 0.16666666666666663,
      prefix: 1,
      ratcliffObershelp: 0.2857142857142857,
      sorensenDice: 0.33333333333333337,
      suffix: 1,
      tversky: 0.2857142857142857,
    });
  });
});

// TODO: Rename
describe('untitled invertible similarities reducer', () => {
  const debugInvertibleSimilarities = debug({
    asSimilarity: true,
    names: invertibleDistances,
  });

  it('needs a description', () => {
    expect(debugInvertibleSimilarities(alpha, beta)).to.deep.equal({
      identity: 0,
      jaccard: 0.7142857142857143,
      jaro: 0.8095238095238096,
      jaroWinkler: 0.8095238095238096,
      lcs: 0.7142857142857143,
      length: 1,
      lig2: 0.5714285714285714,
      lig3: 0.7272727272727273,
      minHash: 0,
      mlipns: 1,
      mongeElkan: 0.1428571428571429,
      overlap: 0.8333333333333334,
      prefix: 0,
      ratcliffObershelp: 0.7142857142857143,
      sorensenDice: 0.6666666666666666,
      suffix: 0,
      tversky: 0.7142857142857143,
    });
  });
});
