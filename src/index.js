const Add = (str) => {
  if (str === "") return 0;

  let  delimiters = /,|\n/;

  if (str.startsWith("//")) {
    const delimiterEndIndex = str.indexOf("\n");
    const customDelimiter = str.substring(2, delimiterEndIndex);
    delimiters = new RegExp(`[${customDelimiter}]`);
    str = str.substring(delimiterEndIndex + 1);
  }

  const numbers = str.split(delimiters).map(Number);
  return numbers.reduce((a, b) => a + b, 0);

};

module.exports = Add;
