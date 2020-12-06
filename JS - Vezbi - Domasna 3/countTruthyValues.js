arrFunction = () => {
  const values = [0, 1 ,' ', undefined, false, true];
  const truthy = values.filter(Boolean)
  // console.log(truthy); // [1, " ", true]
  const countTruthy = truthy.length
  console.log(countTruthy); // 3
}
arrFunction();