const Add = require("./index");

describe("Test suite", () => {
  it("should return 0 ", () => {
    expect(Add("")).toBe(0); // empty string should return 0
  });
  it("should return 3 if input is '1, 2'", () => {
    expect(Add("1, 2")).toBe(3); // comma separated number should return the sum of numbers in the string
  });
});
