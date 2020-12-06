const arr = ([[1, 2], [3]]);

sum = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      sum += array[i][j];
    }
  }
  return sum;
}
console.log(`${sum(arr)}`);