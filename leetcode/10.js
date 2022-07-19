/** @format */

const ReverseString = (str) => {
  //str char[]
  let start_ptr = 0;
  let end_ptr = str.length - 1;
  while (start_ptr <= end_ptr) {
    let temp = str[start_ptr];
    str[start_ptr] = str[end_ptr];
    str[end_ptr] = temp;

    start_ptr += 1;
    end_ptr -= 1;
  }

  return str;
};

console.log(ReverseString(["g", "a", "u", "r", "a", "b"]));
