const multiplyNumByTwo = (num) => {
  return num * 2;
};

const memoizeFunction = () => {
  let cacheObj = {};
  let res = 0;
  return (num) => {
    if (cacheObj[num]) {
      console.log("memoized function");
      return cacheObj[num];
    } else {
      console.log("without memoized function");
      res = num * 2;
      cacheObj[num] = res;
    }
    return res;
  };
};

let p = memoizeFunction();
let res1 = p(2);
console.log(res1);
let res12 = p(2);
console.log(res12);
