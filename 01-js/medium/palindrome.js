/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let start = 0,
    end = str.length - 1;
  while (start < end) {
    if (str[start] === " " || str[start].match(/[^a-zA-Z0-9]/)) {
      start++;
      continue;
    }
    if (str[end] === " " || str[end].match(/[^a-zA-Z0-9]/)) {
      end--;
      continue;
    }
    if (str[start].toLowerCase() !== str[end].toLowerCase()) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

module.exports = isPalindrome;
