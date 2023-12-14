/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let str1Arr = str1.toLowerCase().split("");
  let str2Arr = str2.toLowerCase().split("");
  if (str1Arr.length !== str2Arr.length) {
    return false;
  }
  for (let i = 0; i < str1Arr.length; i++) {
    let index = str2Arr.indexOf(str1Arr[i]);
    if (index === -1) {
      return false;
    } else {
      str2Arr.splice(index, 1);
    }
  }
  return true;
}

module.exports = isAnagram;
