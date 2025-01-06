const Add = require("./index");

describe("Test suite", () => {
  it("should return 0 ", () => {
    expect(Add("")).toBe(0); // empty string should return 0
  });
});