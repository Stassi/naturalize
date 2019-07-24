import bag from 'talisman/metrics/distance/bag';
import damerauLevenshtein from 'talisman/metrics/distance/damerau-levenshtein';
import { distance as eudex } from 'talisman/metrics/distance/eudex';
import guth from 'talisman/metrics/distance/guth';
import hamming from 'talisman/metrics/distance/hamming';
import { distance as identity } from 'talisman/metrics/distance/identity';
import { distance as jaccard } from 'talisman/metrics/distance/jaccard';
import { distance as jaro } from 'talisman/metrics/distance/jaro';
import { distance as jaroWinkler } from 'talisman/metrics/distance/jaro-winkler';
import { distance as lcs } from 'talisman/metrics/distance/lcs';
import { distance as length } from 'talisman/metrics/distance/length';
import levenshtein from 'talisman/metrics/distance/levenshtein';
import { lig2, lig3 } from 'talisman/metrics/distance/lig';
import minhash from 'talisman/metrics/distance/minhash';
import mlipns from 'talisman/metrics/distance/mlipns';
import mongeElkan from 'talisman/metrics/distance/monge-elkan';
import mra from 'talisman/metrics/distance/mra';
import overlap from 'talisman/metrics/distance/overlap';
import prefix from 'talisman/metrics/distance/prefix';
import ratcliffObershelp from 'talisman/metrics/distance/ratcliff-obershelp';
import sift4 from 'talisman/metrics/distance/sift4';
import smithWaterman from 'talisman/metrics/distance/smith-waterman';
import { distance as sorensenDice } from 'talisman/metrics/distance/dice';
import suffix from 'talisman/metrics/distance/suffix';
import tversky from 'talisman/metrics/distance/tversky';

export {
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
  minhash,
  mlipns,
  mongeElkan,
  mra,
  overlap,
  prefix,
  ratcliffObershelp,
  sift4,
  smithWaterman,
  sorensenDice,
  suffix,
  tversky,
};
