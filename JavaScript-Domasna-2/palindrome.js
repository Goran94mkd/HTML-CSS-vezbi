const text = ['Македонија','анаволимилована','дај ми една чаша полна со вино','радар','кајак', 'калабалак','нели не си ти сенилен','јадење и пиење дај','слушател','фудбал','музика'];

function findPalindrome(text) {
  let allPalindromes = [];
  for (let i = 0; i < text.length; i++) {
      let palindrome = text[i].split('').reverse().join('');
      if (palindrome.replaceAll(' ', '') === text[i].replaceAll(' ', '')) {
          allPalindromes.push(text[i]);
      }
  }
  return allPalindromes;
}

console.log(findPalindrome(text));