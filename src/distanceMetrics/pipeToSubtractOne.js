const pipeToSubtractOne = f => (...x) => 1 - f(...x);
const mapPipeToSubtractOne = x => x.map(pipeToSubtractOne);

export { pipeToSubtractOne, mapPipeToSubtractOne };
