import { expect } from 'chai';
import { describe } from 'mocha';
import debug from '../src/debug';

// TODO: Remove
const [debugObj, debugStr] = [{ debug: true }, 'debug'];
const [alpha, beta] = ['example', 'samples'];

// TODO: Rename
describe('untitled distances', () => {
  describe('all', () => {
    const allDistances = debug({ filter: 'all' });

    it('should return all distances', () => {
      expect(allDistances(alpha, beta)).to.deep.equal({
        bag: 2,
        damerauLevenshtein: 3,
        eudex: 650,
        guth: 1,
        hamming: 7,
        identity: 1,
        jaccard: 0.2857142857142857,
        jaro: 0.19047619047619035,
        jaroWinkler: 0.19047619047619035,
        lcs: 0.2857142857142857,
        length: 0,
        levenshtein: 3,
        lig2: 0.4285714285714286,
        lig3: 0.2727272727272727,
        minHash: 1,
        mlipns: 0,
        mongeElkan: 0.8571428571428571,
        overlap: 0.16666666666666663,
        prefix: 1,
        ratcliffObershelp: 0.2857142857142857,
        sift4: 2,
        smithWaterman: 5,
        sorensenDice: 0.33333333333333337,
        suffix: 1,
        tversky: 0.2857142857142857,
      });
    });
  });

  describe('discrete', () => {
    const discreteDistances = debug({ filter: 'discrete' });

    it('should return discrete distances', () => {
      expect(discreteDistances(alpha, beta)).to.deep.equal({
        bag: 2,
        damerauLevenshtein: 3,
        eudex: 650,
        guth: 1,
        hamming: 7,
        levenshtein: 3,
        sift4: 2,
        smithWaterman: 5,
      });
    });
  });

  describe('percentile', () => {
    const percentileDistances = debug({ filter: 'percentile' });

    it('should return percentile distances', () => {
      expect(percentileDistances(alpha, beta)).to.deep.equal({
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

  describe('specific algorithms', () => {
    describe('one', () => {
      const jaroDistance = debug({ filter: 'jaro' });

      it('should return the specific distance', () => {
        expect(jaroDistance(alpha, beta)).to.equal(debugStr);
      });
    });

    describe('many', () => {
      const jaroDistances = debug({ filter: ['jaro', 'jaroWinkler'] });

      it('should return specific distances', () => {
        expect(jaroDistances(alpha, beta)).to.deep.equal(debugObj);
      });
    });
  });
});

// TODO: Rename
describe('untitled similarities', () => {
  describe('all', () => {
    const allSimilarities = debug({
      asSimilarity: true,
      filter: 'all',
    });

    it('should return all similarities', () => {
      expect(allSimilarities(alpha, beta)).to.deep.equal({
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
        mra: {
          codex: [
            'EXMPL',
            'SMPLS',
          ],
          minimum: 3,
          similarity: 1,
          matching: false,
        },
        overlap: 0.8333333333333334,
        prefix: 0,
        ratcliffObershelp: 0.7142857142857143,
        sorensenDice: 0.6666666666666666,
        suffix: 0,
        tversky: 0.7142857142857143,
      });
    });
  });

  describe('discrete', () => {
    const discreteSimilarities = debug({
      asSimilarity: true,
      filter: 'discrete',
    });

    it('should return discrete similarities', () => {
      expect(discreteSimilarities(alpha, beta)).to.deep.equal({
        mra: {
          codex: [
            'EXMPL',
            'SMPLS',
          ],
          minimum: 3,
          similarity: 1,
          matching: false,
        },
      });
    });
  });

  describe('percentile', () => {
    const percentileSimilarities = debug({
      asSimilarity: true,
      filter: 'percentile',
    });

    it('should return percentile similarities', () => {
      expect(percentileSimilarities(alpha, beta)).to.deep.equal({
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

  describe('specific algorithms', () => {
    describe('one', () => {
      const jaroSimilarity = debug({
        asSimilarity: true,
        filter: 'jaro',
      });

      it('should return a specific similarity', () => {
        expect(jaroSimilarity(alpha, beta)).to.equal(debugStr);
      });
    });

    describe('many', () => {
      const jaroSimilarities = debug({
        asSimilarity: true,
        filter: ['jaro', 'jaroWinkler'],
      });

      it('should return specific similarities', () => {
        expect(jaroSimilarities(alpha, beta)).to.deep.equal(debugObj);
      });
    });
  });
});
