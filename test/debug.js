import { expect } from 'chai';
import { describe } from 'mocha';
import {
  percentileDistances as invertibleDistances,
} from '../src/stringMetrics/distances';
import debug from '../src/debug';

// TODO: Rename
describe('untitled invertible distances reducer', () => {
  const debugInvertibleDistances = debug({ names: invertibleDistances });

  it('needs a description', () => {
    expect(debugInvertibleDistances('banana', 'ananab')).to.deep.equal({
      identity: 1,
      jaccard: 0,
      jaro: 0.11111111111111105,
      jaroWinkler: 0.11111111111111105,
      lcs: 0.16666666666666663,
      length: 0,
      lig2: 0.33333333333333337,
      lig3: 0.19999999999999996,
      minHash: 1,
      mlipns: 0,
      mongeElkan: 1,
      overlap: 0,
      prefix: 1,
      ratcliffObershelp: 0.16666666666666663,
      sorensenDice: 0.33333333333333337,
      suffix: 1,
      tversky: 0,
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
    expect(debugInvertibleSimilarities('banana', 'ananab')).to.deep.equal({
      identity: 0,
      jaccard: 1,
      jaro: 0.888888888888889,
      jaroWinkler: 0.888888888888889,
      lcs: 0.8333333333333334,
      length: 1,
      lig2: 0.6666666666666666,
      lig3: 0.8,
      minHash: 0,
      mlipns: 1,
      mongeElkan: 0,
      overlap: 1,
      prefix: 0,
      ratcliffObershelp: 0.8333333333333334,
      sorensenDice: 0.6666666666666666,
      suffix: 0,
      tversky: 1,
    });
  });
});
