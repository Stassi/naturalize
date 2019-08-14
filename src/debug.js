import {
  entries,
  isArray,
  itemIncludedIn,
  pipe,
  reduce,
} from './utilities';
import stringMetrics from './stringMetrics';
import metrics from './stringMetrics/metrics';

const debug = ({
  asSimilarity,
  filter,
  ...options
}) => {
  const filterIsArray = isArray(filter);

  const handleString = (...args) => stringMetrics({
    ...options,
    asSimilarity,
    name: filter,
  })(...args);

  const reduceKeyword = pipe(
    entries,
    reduce(
      (
        acc,
        [
          name,
          {
            discrete,
            distance,
            similarity,
          },
        ],
      ) => {
        const distancePredicate = !asSimilarity && distance;
        const similarityPredicate = !!asSimilarity && similarity;
        const distanceOrSimilarityPredicate = distancePredicate || similarityPredicate;
        const discretesRequired = filter === 'all' || filter === 'discrete';
        const discretePredicate = discretesRequired && discrete;
        const percentilesRequired = filter === 'all' || filter === 'percentile';
        const percentilePredicate = percentilesRequired && !discrete;
        const discreteOrPercentilePredicate = discretePredicate || percentilePredicate;
        const predicate = distanceOrSimilarityPredicate && discreteOrPercentilePredicate;
        return predicate ? [...acc, name] : acc;
      },
      [],
    ),
  )(metrics);

  const handleArraysAndKeywords = (...args) => reduce(
    (acc, name) => ({
      ...acc,
      [name]: stringMetrics({
        ...options,
        asSimilarity,
        name,
      })(...args),
    }),
    {},
  )(filterIsArray ? filter : reduceKeyword);

  const isArrayOrKeyword = filterIsArray
    || itemIncludedIn(filter)([
      'all',
      'discrete',
      'percentile',
    ]);

  // TODO: Simplify control flow
  const res = isArrayOrKeyword
    ? handleArraysAndKeywords
    : handleString;

  return res;
};

export default debug;
