function getSum(nums) {
  const resultado = nums.reduce((a, b) => a + b);
  return resultado;
}
console.log(getSum([1, 2, 3]));
