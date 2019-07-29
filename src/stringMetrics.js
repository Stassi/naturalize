import * as metrics from './distanceMetrics/strings';

const stringMetrics = ({
  alpha,
  beta,
  innerSimilarity,
  name,
}) => {
  const distance = metrics[name];
  if (name === 'mongeElkan') {
    return distance(innerSimilarity);
  } else if (name === 'tversky') {
    return distance({ alpha, beta });
  } else {
    return distance;
  }
};

export default stringMetrics;
