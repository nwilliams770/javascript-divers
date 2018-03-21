function simpleArraySum(ar) {
  let arr = Array.from(arguments).splice(1);
  return arr.reduce((accum, value) => accum + value);
}