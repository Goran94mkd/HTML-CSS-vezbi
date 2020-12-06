numbers = (x, y) => {
  return x.filter(Set.prototype.has, new Set(y));
}
console.log(numbers([1,2,3,4], [1,2,5]));