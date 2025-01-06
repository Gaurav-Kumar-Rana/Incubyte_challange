const Add = (str) => {
  if (str === "") return 0;
  const numbers = str.split(",").map(Number);
  return numbers.reduce((a, b) => a + b, 0);
};

module.exports = Add;
