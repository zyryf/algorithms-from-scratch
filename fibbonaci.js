const fibonnaci = (n) => {
  if (n === 0 || n === 1) {
    return n;
  }
  let twoBehind = 0;
  let oneBehind = 1;
  let result = 0;

  for (let i = 0; i < n - 1; i++) {
    result = twoBehind + oneBehind;
    twoBehind = oneBehind;
    oneBehind = result;
  }
  return result;
};

console.log(fibonnaciSum(5));
