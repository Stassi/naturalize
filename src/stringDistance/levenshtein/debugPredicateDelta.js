import applyEquals from './applyEquals';
import mapUTF16CodeAt from './mapUTF16CodeAt';

const debugPredicateDelta = ([alpha, beta]) => (start) => {
  const mapUTF16CodeAtStart = mapUTF16CodeAt(start);
  const alphaBetaUTF16StartCodes = mapUTF16CodeAtStart([alpha, beta]);
  return applyEquals(alphaBetaUTF16StartCodes);
};

export default debugPredicateDelta;
