/* eslint-disable implicit-arrow-linebreak */
import bag from 'talisman/metrics/distance/bag';
import damerauLevenshtein from 'talisman/metrics/distance/damerau-levenshtein';
import { distance as eudex } from 'talisman/metrics/distance/eudex';
import guth from 'talisman/metrics/distance/guth';
import hamming from 'talisman/metrics/distance/hamming';
import {
  distance as identity,
  similarity as identitySimilarity,
} from 'talisman/metrics/distance/identity';
import { distance as jaccard } from 'talisman/metrics/distance/jaccard';
import { distance as jaro } from 'talisman/metrics/distance/jaro';
import { distance as jaroWinkler } from 'talisman/metrics/distance/jaro-winkler';
import { distance as lcs } from 'talisman/metrics/distance/lcs';
import { distance as length } from 'talisman/metrics/distance/length';
import levenshtein from 'talisman/metrics/distance/levenshtein';
import {
  lig2 as lig2Similarity,
  lig3 as lig3Similarity,
} from 'talisman/metrics/distance/lig';
import { distance as minHash } from 'talisman/metrics/distance/minhash';
import mlipns from 'talisman/metrics/distance/mlipns';
import mongeElkanWithoutSimilarity from 'talisman/metrics/distance/monge-elkan';
import mraComparison from 'talisman/metrics/distance/mra';
import overlapSimilarity from 'talisman/metrics/distance/overlap';
import { distance as prefix } from 'talisman/metrics/distance/prefix';
import { distance as ratcliffObershelp } from 'talisman/metrics/distance/ratcliff-obershelp';
import sift4 from 'talisman/metrics/distance/sift4';
import smithWaterman from 'talisman/metrics/distance/smith-waterman';
import { distance as sorensenDice } from 'talisman/metrics/distance/dice';
import { distance as suffix } from 'talisman/metrics/distance/suffix';
import tverskySimilarity from 'talisman/metrics/distance/tversky';

const toggleDistanceOrSimilarity = f => (...x) => 1 - f(...x);
const mapToggleDistanceOrSimilarity = x => x.map(toggleDistanceOrSimilarity);

const mongeElkan = ({ similarity = identitySimilarity }) => (...args) =>
  mongeElkanWithoutSimilarity(similarity, ...args);

const tversky = options => toggleDistanceOrSimilarity(
  (...args) => tverskySimilarity(options, ...args),
);

const [
  lig2,
  lig3,
  overlap,
] = mapToggleDistanceOrSimilarity([
  lig2Similarity,
  lig3Similarity,
  overlapSimilarity,
]);

const metrics = {
  bag,
  damerauLevenshtein,
  eudex,
  guth,
  hamming,
  identity,
  jaccard,
  jaro,
  jaroWinkler,
  lcs,
  length,
  levenshtein,
  lig2,
  lig3,
  minHash,
  mlipns,
  mongeElkan,
  mraComparison,
  overlap,
  prefix,
  ratcliffObershelp,
  sift4,
  smithWaterman,
  sorensenDice,
  suffix,
  tversky,
};

const applyOptionsToDistance = ({
  distance,
  isAlgorithmWithOptions,
  options,
}) => (isAlgorithmWithOptions ? distance(options) : distance);

const convertToSimilarity = (asSimilarity, distance) =>
  (asSimilarity ? toggleDistanceOrSimilarity(distance) : distance);

const stringMetrics = ({
  asSimilarity,
  name,
  ...options
}) => convertToSimilarity(
  asSimilarity,
  applyOptionsToDistance({
    options,
    distance: metrics[name],
    isAlgorithmWithOptions: [
      'mongeElkan',
      'tversky',
    ].includes(name),
  }),
);

export default stringMetrics;
