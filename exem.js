function Mission1(arr) {
  evenArr = arr.filter((number) => number % 2 == 0);
  return evenArr;
}
p = Mission1([2, 3, 4, 5, 6]);
console.log(p);

function Mission2(str) {
  const wordsArr = str.trim().split(/\s+/);
  const filterArr = wordsArr.filter((w) => w.length == 4);
  return filterArr.length;
}

const str = "the test is nice";

console.log(Mission2(str));

function Mission3(arr) {
  const mergedArr = arr.reduce(function (prev, next) {
    return prev.concat(next);
  });

  return mergedArr;
}
const D2Arr = [
  ["hi", "whats"],
  ["app", "thre"],
];
console.log(Mission3(D2Arr));

function Mission4(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      return 1;
    }
    if (arr[i] > arr[i + 1]) {
      return 2;
    } else {
      return 0;
    }
  }
}
console.log(mission4([1, 2, 3, 4]));

module.exports = {
  Mission1,
  Mission2,
  Mission3,
  Mission4,
};
