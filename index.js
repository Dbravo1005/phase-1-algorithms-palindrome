const { abstract } = require("mocha/lib/reporters/base");

function isPalindrome(word) {
  let j = word.length - 1;

  for (let i = 0; i < word.length / 2; i++){
    if (word[i] !== word[j]){
      return false
    }
    j--;
}
  return true;

}

let word1 = 'abba'
let word2 = 'racecar'
let word3 = 'a'
let word4 = 'robot'
let word5 = 'ab'

console.log(isPalindrome(word1));
console.log(isPalindrome(word2));
console.log(isPalindrome(word3));
console.log(isPalindrome(word4));
console.log(isPalindrome(word5));




/* 
  Add your pseudocode here
*/
 // make a function isPalendrome with a string (STR)

 // make a variable that will keep look at the front and back of any variable

 // start a for loop that will read the variable halfway and then return to read it in reverse

 // if it reads the same then consider it true

 // if it does not then it is false

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
