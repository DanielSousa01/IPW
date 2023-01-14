import assert from "node:assert/strict";

import { Spy } from "../exercise6.mjs";

describe("Exercise 5 module Tests", () => {
  describe("#Spy tests with 3 console.error(calling console.error)", () => {
    it("spy.count should be equal to 3", () => {
      var spy = Spy(console, "error");
      console.error("calling console.error");
      console.error("calling console.error");
      console.error("calling console.error");
      assert.equal(spy.count, 3);
    });
  });

  describe("#Spy tests with 3 console.log(console test)", () => {
    it("spy.count should be equal to 3", () => {
      var spy = Spy(console, "log");
      console.log("console test");
      console.log("console test");
      console.log("console test");
      assert.equal(spy.count, 3);
    });
  });

  describe("#Spy tests with 19 console.log(console test)", () => {
    it("spy.count should be equal to 10", () => {
      var spy = Spy(console, "log");
      console.log("console test");
      console.log("console test");
      console.log("console test");
      console.log("console test");
      console.log("console test");
      console.log("console test");
      console.log("console test");
      console.log("console test");
      console.log("console test");
      console.log("console test");
      assert.equal(spy.count, 10);
    });
  });

  describe("#Spy tests with 0 console.log(console test)", () => {});
  it("spy.count should be equal to 0", () => {
    var spy = Spy(console, "log");
    assert.equal(spy.count, 0);
  });
});
