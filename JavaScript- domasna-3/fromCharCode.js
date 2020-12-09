// Regular
const string2 = '74971189711599114105112116';

const asciiToChar = function (func) {
  const ascii = [];
  for (let i = 0; i < string2.length;) {
    const num = string2[i] === '1' ? 3 : 2;
    ascii.push(string2.substr(i, num));
    i += num;
  }
  const convertedString2 = String.fromCharCode(...ascii);
  console.log(`"${convertedString2}"`);
}
asciiToChar(string2);

// Callback

const asciiToChar2 = function (funcCallback) {
  const ascii = [];
  for (let i = 0; i < string2.length;) {
    const num = string2[i] === '1' ? 3 : 2;
    ascii.push(string2.substr(i, num));
    i += num; 
  } 
  const convertedString2 = String.fromCharCode(...ascii);
  console.log(`"${convertedString2}"`);
}

const asciiToCharCallback = function (func, callback) {
  return callback(func)
}

asciiToCharCallback(string2, asciiToChar2);

// Promise 

const promiseAsciiCode = new Promise(function(resolve, reject) {
  let isCharacter = true;

  if (isCharacter) {
      resolve(asciiToChar2(string2));
  }
  else {
      reject(string2);
  }
})



promiseAsciiCode.then(function(resolveMessage) {
  console.log(`${resolveMessage}`)
}).catch(function(rejectMessage){
  console.log(`${rejectMessage}`);
})