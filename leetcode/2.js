/** @format */

const AddSumIndex = (arr, sum) => {
  var map = {}; //taking empty object as map
  // var val;
  var result = [];
  for (let i = 0; i < arr.length; i++) {
    if (sum - arr[i] in map) {
      result[1] = i;
      result[0] = map[sum - arr[i]];
    }
    map[arr[i]] = i;
  }
  console.log(result);
};

AddSumIndex([2, 3, 6, 1], 8);
