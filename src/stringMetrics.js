import * as metrics from './distanceMetrics/strings';
import {
  subtractFromOne as toSimilarity,
} from './distanceMetrics/subtractFromOne';

const stringMetrics = ({ name, similarity }) => {
  const distance = metrics[name];
  return similarity ? toSimilarity(distance) : distance;
};

export default stringMetrics;
