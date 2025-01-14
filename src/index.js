const Add = (str) => {
  if (str === "") return 0;

  let  delimiters = /,|\n/;
  let customDelimiter = '';

  if (str.startsWith("//")) {
    const delimiterEndIndex = str.indexOf("\n");
    customDelimiter = str.substring(2, delimiterEndIndex);
    delimiters = new RegExp(`[${customDelimiter}]`);
    str = str.substring(delimiterEndIndex + 1);
  }

  const numbers = str.split(delimiters).map(Number);
  const negativeNumbers = numbers.filter(num => num < 0);

  if(negativeNumbers.length > 0) {
    return 'negative not allowed: ' + negativeNumbers.join(", ");
  } 

  if(customDelimiter == '*'){
    return numbers.reduce((a, b) => a * b, 1);
  }
  return numbers.reduce((a, b) => a + b, 0);
};

module.exports = Add;
