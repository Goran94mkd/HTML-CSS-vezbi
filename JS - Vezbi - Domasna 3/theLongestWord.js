function findLongestWord(array) {
  let longestWord = []
  array.forEach(word => {
    if(word.length > longestWord.length) {
      longestWord = word;
    }
  })
  return longestWord;
}

const countries = findLongestWord(["Russia", "Macedonia", "Serbia", "Norway", "Sweden", "Croatia", "USA", "Italy"]);
console.log(countries);

