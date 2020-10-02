function findLongestWord(string = '') {
  const stringSplit = string.split(` `);
  let longesWord = '';
  for (let i = 0; i < stringSplit.length; i += 1) {
    if (stringSplit[i].length > longesWord.length) {
      longesWord = stringSplit[i];
    }
  }
  return longesWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
