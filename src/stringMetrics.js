import {
  identity,
  pipe,
  subtract,
} from './utilities';
import * as metrics from './distanceMetrics/strings';

const stringMetrics = ({
  name,
  similarity,
}) => pipe(
  metrics[name],
  similarity ? subtract(1) : identity,
);

export default stringMetrics;
