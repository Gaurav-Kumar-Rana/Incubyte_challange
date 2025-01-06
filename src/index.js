const Add = (str) => {
  if (str === "") return 0;
  const delimiters = /,|\n/;
  const numbers = str.split(delimiters).map(Number);
  return numbers.reduce((a, b) => a + b, 0);

};

module.exports = Add;
