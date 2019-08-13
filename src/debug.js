import {
  entries,
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
  const names = pipe(
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

  const res = (...args) => reduce(
    (acc, name) => ({
      ...acc,
      [name]: stringMetrics({
        ...options,
        asSimilarity,
        name,
      })(...args),
    }),
    {},
  )(names);

  return res;
};

export default debug;
