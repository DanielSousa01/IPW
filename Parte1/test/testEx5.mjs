import assert from "node:assert/strict";

import { checkUsersValid } from "../exercise5.mjs";

describe("Exercise 5 module Tests", () => {
  describe("#checkUsersValid tests with goodUsers = [{ id: 1 }, { id: 2 }, { id: 3 }]", () => {
    var goodUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];
    var testAllValid = checkUsersValid(goodUsers);

    it("Should gave true", () => {
      assert.equal(testAllValid([{ id: 2 }, { id: 1 }]), true);
    });
    it("Should gave false", () => {
      assert.equal(testAllValid([{ id: 2 }, { id: 4 }, { id: 1 }]), false);
    });
    it("Should gave true", () => {
      assert.equal(testAllValid([]), true);
    });
    it("Should gave false", () => {
      assert.equal(testAllValid([{ id: 6 }, { id: 7 }, { id: 8 }]), false);
    });
  });

  describe("#checkUsersValid tests with goodUsers = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }]", () => {
    var goodUsers = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
    ];
    var testAllValid = checkUsersValid(goodUsers);

    it("Should gave true", () => {
      assert.equal(testAllValid([{ id: 2 }, { id: 1 }]), true);
    });
    it("Should gave true", () => {
      assert.equal(testAllValid([{ id: 2 }, { id: 4 }, { id: 1 }]), true);
    });
    it("Should gave true", () => {
      assert.equal(testAllValid([]), true);
    });
    it("Should gave true", () => {
      assert.equal(testAllValid([{ id: 6 }, { id: 7 }, { id: 8 }]), true);
    });
  });
});
