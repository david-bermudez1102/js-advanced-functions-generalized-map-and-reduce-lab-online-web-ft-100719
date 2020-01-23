// Add your functions here
const map = (sourceArray, func) => {
  const newArray = [];
  for (const n of sourceArray) {
    newArray.push(func(n));
  }
  return newArray;
};

const reduce = (sourceArray, func, startingPoint = 0) => {
  let memo, s;
  if (startingPoint) {
    memo = startingPoint;
    s = 0;
  } else {
    memo = sourceArray[0];
    s = 1;
  }
  for (let i = s; i < sourceArray.length; i++) {
    memo = func(memo, sourceArray[i]);
  }
  return memo;
};
