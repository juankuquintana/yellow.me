const isFunction = input => typeof input === 'function';
export default bool => elementOrFunction =>
  bool ? (isFunction(elementOrFunction) ? elementOrFunction() : elementOrFunction) : null;