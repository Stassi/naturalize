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
    filterIncludedIn,
    handleArrayOrKeyword,
    handleString,
    filterIsArrayOrKeyword: or(
      filterIsArray,
    )(
      filterIncludedIn(keywords),
    ),
  }),
  ({
    asSimilarity,
    filterIncludedIn,
    filterIsArrayOrKeyword,
    handleArrayOrKeyword,
    handleString,
    ...options
  }) => {
    const debugGamma = debugKeywordReducer(asSimilarity)(filterIncludedIn);
    const debugEpsilon = pipe(handleArrayOrKeyword, applyTo);
    const debugBeta = debugEpsilon(debugGamma);

    const stringMetric = (name) => stringMetrics({
      ...options,
      asSimilarity,
      name,
    });

    const handleArraysAndKeywords = (...args) => debugBeta(
      reduce(
        (acc, name) => ({
          ...acc,
          [name]: stringMetric(name)(...args),
        }),
        {},
      ),
    );

    const res = filterIsArrayOrKeyword
      ? handleArraysAndKeywords
      : handleString(stringMetric);

    return res;
  },
);

export default debug;
