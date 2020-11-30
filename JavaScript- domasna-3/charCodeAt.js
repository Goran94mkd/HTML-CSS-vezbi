// Regular

const string1 = "javascript";


const charToAscii = function (text) {
    const char = /[a-z]/;
    const arr = [];
    if(text.match(char)){
       for(let i = 0; i < text.length; i++){
        const lettersPush = text.charCodeAt(i);
        arr.push(lettersPush);}
    } else {
      
    }
    return arr.join(''); 
}
console.log(charToAscii(string1));



// Callback


const charToAscii2 = function (text1) {
    const char = /[a-z]/;
    const arr = [];
    if(text1.match(char)){
       for(let i = 0; i < text1.length; i++){
        const lettersPush = text1.charCodeAt(i);
        arr.push(lettersPush);}
    } else {
      
    }
    return arr.join(''); 
}

const charToAsciiCallback = function (text, callback) {
  return callback(text)
}

console.log(charToAsciiCallback(string1, charToAscii2));


// Promise 

const promiseCharacter = new Promise(function(resolve, reject) {
    let isAsciiCode = true;

    if (isAsciiCode) {
        resolve(charToAscii(string1));
    }
    else {
        reject(string1);
    }
})

promiseCharacter.then(function(resolveMessage) {
    console.log(`${resolveMessage}`)
}).catch(function(rejectMessage){
    console.log(`${rejectMessage}`);
})