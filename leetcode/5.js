/** @format */

function IsPalindrome(num) {
  let nums = num.toString();
  let rev = nums.split("").reverse().join("");
  if (rev == nums) console.log("palindrome");
  else console.log("not palindrome");
}

//IsPalindrome(1211);

//Method 2
function IsPalindrome1(num) {
  let input = num;
  let rev_num = 0;
  while (num != 0) {
    rev_num = rev_num * 10 + (num % 10); //reversing number here
    num = Math.floor(num / 10);
  }
  if (rev_num == input) console.log("palindrome");
  else console.log("not palindrome");
}

IsPalindrome1(1211);
