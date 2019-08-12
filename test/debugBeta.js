import { expect } from 'chai';
import { describe } from 'mocha';
import debugFn from '../src/debugBeta';

// TODO: Remove
const [debugObj, debugStr] = [{ debug: true }, 'debug'];
const [alpha, beta] = ['example', 'samples'];

// TODO: Rename
describe('untitled distances', () => {
  describe('all', () => {
    const allDistances = debugFn({ filter: 'all' });

    it('should return all distances', () => {
      expect(allDistances(alpha, beta)).to.deep.equal(debugObj);
    });
  });

  describe('discrete', () => {
    const discreteDistances = debugFn({ filter: 'discrete' });

    it('should return discrete distances', () => {
      expect(discreteDistances(alpha, beta)).to.deep.equal(debugObj);
    });
  });

  describe('percentile', () => {
    const percentileDistances = debugFn({ filter: 'percentile' });

    it('should return percentile distances', () => {
      expect(percentileDistances(alpha, beta)).to.deep.equal(debugObj);
    });
  });

  describe('specific algorithms', () => {
    describe('one', () => {
      const jaroDistance = debugFn({ filter: 'jaro' });

      it('should return the specific distance', () => {
        expect(jaroDistance(alpha, beta)).to.equal(debugStr);
      });
    });

    describe('many', () => {
      const jaroDistances = debugFn({ filter: ['jaro', 'jaroWinkler'] });

      it('should return specific distances', () => {
        expect(jaroDistances(alpha, beta)).to.deep.equal(debugObj);
      });
    });
  });
});

// TODO: Rename
describe('untitled similarities', () => {
  describe('all', () => {
    const allSimilarities = debugFn({
      asSimilarity: true,
      filter: 'all',
    });

    it('should return all similarities', () => {
      expect(allSimilarities(alpha, beta)).to.deep.equal(debugObj);
    });
  });

  describe('discrete', () => {
    const discreteSimilarities = debugFn({
      asSimilarity: true,
      filter: 'discrete',
    });

    it('should return discrete similarities', () => {
      expect(discreteSimilarities(alpha, beta)).to.deep.equal(debugObj);
    });
  });

  describe('percentile', () => {
    const percentileSimilarities = debugFn({
      asSimilarity: true,
      filter: 'percentile',
    });

    it('should return percentile similarities', () => {
      expect(percentileSimilarities(alpha, beta)).to.deep.equal(debugObj);
    });
  });

  describe('specific algorithms', () => {
    describe('one', () => {
      const jaroSimilarity = debugFn({
        asSimilarity: true,
        filter: 'jaro',
      });

      it('should return a specific similarity', () => {
        expect(jaroSimilarity(alpha, beta)).to.equal(debugStr);
      });
    });

    describe('many', () => {
      const jaroSimilarities = debugFn({
        asSimilarity: true,
        filter: ['jaro', 'jaroWinkler'],
      });

      it('should return specific similarities', () => {
        expect(jaroSimilarities(alpha, beta)).to.deep.equal(debugObj);
      });
    });
  });
});
