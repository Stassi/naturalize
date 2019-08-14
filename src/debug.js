import {
  applyToMap,
  entries,
  isArray,
  itemIncludedIn,
  or,
  pipe,
  reduce,
} from './utilities';
import applyTo from './utilities/applyTo';
import metrics from './stringMetrics/metrics';
import stringMetrics from './stringMetrics';
import debugKeywordReducer from './debugKeywordReducer';

const keywords = [
  'all',
  'discrete',
  'percentile',
];

const debug = pipe(
  ({ asSimilarity, ...props }) => ({
    ...props,
    mapApplyAsSimilarityTo: applyToMap(asSimilarity),
  }),
  ({ filter, ...props }) => ({
    ...props,
    filterIsArray: isArray(filter),
    mapApplyFilterTo: applyToMap(filter),
  }),
  ({
    filterIsArray,
    mapApplyFilterTo,
    ...props
  }) => ({
    ...props,
    filterIsArray,
    withFilter: mapApplyFilterTo([
      itemIncludedIn,
      (filter) => (keywordReducer) => (
        filterIsArray
          ? filter
          : pipe(
            entries,
            reduce(keywordReducer, []),
          )(metrics)
      ),
      (filter) => (stringMetric) => (...args) => stringMetric(filter)(...args),
    ]),
  }),
  ({
    filterIsArray,
    withFilter: [
      filterIncludedIn,
      handleArrayOrKeyword,
      handleString,
    ],
    ...props
  }) => ({
    ...props,
    handleArrayOrKeyword,
    handleString,
    debugGamma: debugKeywordReducer(filterIncludedIn),
    filterIsArrayOrKeyword: or(
      filterIsArray,
    )(
      filterIncludedIn(keywords),
    ),
  }),
  ({
    handleArrayOrKeyword,
    mapApplyAsSimilarityTo,
    debugGamma,
    ...props
  }) => ({
    ...props,
    withAsSimilarity: mapApplyAsSimilarityTo([
      (asSimilarity) => (name) => stringMetrics({
        ...props,
        asSimilarity,
        name,
      }),
      pipe(
        debugGamma,
        handleArrayOrKeyword,
        applyTo,
      ),
    ]),
  }),
  ({
    filterIsArrayOrKeyword,
    handleString,
    withAsSimilarity: [
      stringMetric,
      debugBeta,
    ],
  }) => (
    filterIsArrayOrKeyword
      ? (...args) => debugBeta(
        reduce(
          (acc, name) => ({
            ...acc,
            [name]: stringMetric(name)(...args),
          }),
          {},
        ),
      )
      : handleString(stringMetric)
  ),
);

export default debug;
