const subtractFromOne = f => (...x) => 1 - f(...x);
const mapSubtractFromOne = x => x.map(subtractFromOne);

export { subtractFromOne, mapSubtractFromOne };
