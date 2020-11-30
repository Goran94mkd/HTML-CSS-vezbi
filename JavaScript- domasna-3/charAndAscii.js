// Regular

const string3 = "j97va11599ri112116";

const charAndAscii = function (combination) {
    const char = /^[a-zA-Z ._-]*$/;
    const numbers = /^[0-9]*$/;

    if (combination.match(char)) {
        let array = [];
        for (let i = 0; i < combination.length; i++) {
          const charPush = combination.charCodeAt(i);
          array.push(charPush);
        }
    } else if (combination.match(numbers)) {
        let arrayAscii = [];
        for (let i = 0; i < combination.length; ) {
          const number = combination[i] === "1" ? 3 : 2;
          const pushToArray = combination.substr(i, number);
          arrayAscii.push(pushToArray);
          i += number;
        }
    } else {
      const solution = [];
      for (let i = 0; i < combination.length; i++) {
        if (combination[i].match(char)) {
          let charToNumber = combination.charCodeAt(i);
          solution.push(charToNumber);
        } else {
          const numsOfNumbers = combination[i] === "1" ? 3 : 2;
          const pushToArray = String.fromCharCode(
            Number(combination.substr(i, numsOfNumbers))
          );
          solution.push(pushToArray);
          i += numsOfNumbers - 1;
        }
      }
      return solution.join("");     
    }
};
console.log(charAndAscii(string3));



// Callback

const charAndAsci2 = function (combination) {
  const char = /^[a-zA-Z ._-]*$/;
  const numbers = /^[0-9]*$/;

  if (combination.match(char)) {
      let array = [];
      for (let i = 0; i < combination.length; i++) {
        const charPush = combination.charCodeAt(i);
        array.push(charPush);
      }
  } else if (combination.match(numbers)) {
      let arrayAscii = [];
      for (let i = 0; i < combination.length; ) {
        const number = combination[i] === "1" ? 3 : 2;
        const pushToArray = combination.substr(i, number);
        arrayAscii.push(pushToArray);
        i += number;
      }
  } else {
    const solution = [];
    for (let i = 0; i < combination.length; i++) {
      if (combination[i].match(char)) {
        let charToNumber = combination.charCodeAt(i);
        solution.push(charToNumber);
      } else {
        const numsOfNumbers = combination[i] === "1" ? 3 : 2;
        const pushToArray = String.fromCharCode(
          Number(combination.substr(i, numsOfNumbers))
        );
        solution.push(pushToArray);
        i += numsOfNumbers - 1;
      }
    }
    return solution.join("");     
  }
};

const charAndAsciiCallback = function (combination, callback) {
  return callback(combination)
}

console.log(charAndAsciiCallback(string3,charAndAsci2));



// Promise

const promiseCharAndAscii = new Promise (function(resolve, reject) {
  let charAscii = true;

  if (charAscii) {
    resolve(charAndAscii(string3))
  }
  else {
    reject(string3);
  }
})

promiseCharAndAscii.then(function(resolveMessage) {
  console.log(`${resolveMessage}`)
}).catch(function(rejectMessage){
  console.log(`${rejectMessage}`);
})


