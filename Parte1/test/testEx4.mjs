import assert from "node:assert/strict";

import "../exercise4.mjs";

describe("Exercise 4 module Tests", () => {
  describe("#associateWith tests with numbers = [one, two, three, four]", () => {
    let numbers = ["one", "two", "three", "four"];
    it("Should create an object equal to { one: 3, two: 3, three: 5, four: 4 }", () => {
      assert.deepEqual(
        numbers.associateWith((elem) => elem.length),
        { one: 3, two: 3, three: 5, four: 4 }
      );
    });
  });

  describe("#associateWith tests with numbers = [one, two, three, one, four]", () => {
    let numbers = ["one", "two", "three", "one", "four"];
    it("Should create an object equal to { two: 3, three: 5, one: 3, four: 4 }", () => {
      assert.deepEqual(
        numbers.associateWith((elem) => elem.length),
        { two: 3, three: 5, one: 3, four: 4 }
      );
    });
  });

  describe("#associateWith tests with numbers = []", () => {
    let numbers = [];
    it("Should create an empty object", () => {
      assert.deepEqual(
        numbers.associateWith((elem) => elem.length),
        {}
      );
    });
  });

  describe("#associateWith tests with numbers = [one, one, one, one]", () => {
    let numbers = ["one", "one", "one", "one"];
    it("Should create an object equal to { one: 3 }", () => {
      assert.deepEqual(
        numbers.associateWith((elem) => elem.length),
        { one: 3 }
      );
    });
  });
  
  describe("#associateWith tests with numbers = [one, two, one, two, three, one, four]", () => {
    let numbers = ["one", "two", "one", "two", "three", "one", "four"];
    it("Should create an object equal to { two: 3, three: 5, one: 3, four: 4 }", () => {
      assert.deepEqual(
        numbers.associateWith((elem) => elem.length),
        { two: 3, three: 5, one: 3, four: 4 }
      );
    });
  });

  describe("#associateWith tests with numbers = [1, two, true, {a: 0}]", () => {
    let numbers = [1, "two", true, { a: 0 }];
    it("Should create an object equal to { '1': 'number', two: 'string', true: 'boolean', '[object Object]': 'object' }", () => {
      assert.deepEqual(
        numbers.associateWith((elem) => typeof elem),
        {
          1: "number",
          two: "string",
          true: "boolean",
          "[object Object]": "object",
        }
      );
    });
  });
});
