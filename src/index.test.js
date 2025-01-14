const Add = require("./index");

describe("Test suite", () => {
  it("should return 0 ", () => {
    expect(Add("")).toBe(0); // empty string should return 0
  });
  it("should return 3 if input is '1, 2'", () => {
    expect(Add("1, 2")).toBe(3); // comma separated number should return the sum of numbers in the string
  });
  it("should handle new line and comma in the input '1\/n2,3'", () => {
    expect(Add("1\n2,3")).toBe(6); // new line and comma separated numbers should return the sum of numbers in the string
  });
  it("should not allow negative number", () => {
    expect(Add("//;\n-1;-2;3")).toBe('negative not allowed: -1, -2'); // the input should not allow negative number if found return error message negative not allowed and all negative numbers'
  });
});

describe("Test suit 2",()=>{
  it("should return multiplication for '//*\n1*7*3' as 6", ()=>{
    expect(Add("//*\n1*7*3")).toBe(21);
  })
});
