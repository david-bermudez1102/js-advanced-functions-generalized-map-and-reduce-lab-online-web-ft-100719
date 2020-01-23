// Add your functions here
const map = (sourceArray, func) => {
  const newArray = [];
  for (const n of sourceArray) {
    newArray.push(func(n));
  }
  return newArray;
};

const reduce = (sourceArray, func, startingPoint = 0) => {
  let memo;
  if (startingPoint) {
    memo = startingPoint;
    for (let i=0; i<sourceArray.length; i++) {
      memo = func(memo, sourceArray[i]);
    }
  } else {
    memo = sourceArray[0];
    for (let i = 1; i < sourceArray.length; i++) {
      memo = func(memo, sourceArray[i]);
    }
  }

  return memo;
};
