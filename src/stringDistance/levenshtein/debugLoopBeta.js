import mapDecrement from './mapDecrement';

// TODO: until
const debugLoopBeta = predicate => (stringLengths) => {
  let stringLengthsTemp = stringLengths;
  while (
    predicate(stringLengthsTemp)
  ) {
    stringLengthsTemp = mapDecrement(stringLengthsTemp);
  }
  return stringLengthsTemp;
};

export default debugLoopBeta;
