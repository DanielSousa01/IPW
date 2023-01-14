import assert from "node:assert/strict";

import validatorModule from "../exercise123.mjs";

describe("Exercise 1 module Tests", () => {
  describe("#validateProperty tests with name: p1", () => {
    const validator = {
      name: "p1",
      validators: [
        (s) => typeof s == "string" && s.length > 2,
        (s) => s[0] == "a",
      ],
    };
    const obj1 = { p1: "abc" };
    const obj2 = { p2: 123 };
    const obj3 = { p1: "a", p2: 123 };

    it("Should gave true", () => {
      assert.equal(validatorModule.validateProperty(obj1, validator), true);
    });
    it("Should gave false", () => {
      assert.equal(validatorModule.validateProperty(obj2, validator), false);
    });
    it("Should gave false", () => {
      assert.equal(validatorModule.validateProperty(obj3, validator), false);
    });
  });

  describe("#validateProperty tests with name: p2", () => {
    const validator = {
      name: "p2",
      validators: [
        (s) => typeof s == "string" && s.length > 2,
        (s) => s[0] == "a",
      ],
    };
    const obj1 = { p1: "abc" };
    const obj2 = { p2: 123 };
    const obj3 = { p1: "a", p2: 123 };

    it("Should gave false", () => {
      assert.equal(validatorModule.validateProperty(obj1, validator), false);
    });
    it("Should gave false", () => {
      assert.equal(validatorModule.validateProperty(obj2, validator), false);
    });
    it("Should gave false", () => {
      assert.equal(validatorModule.validateProperty(obj3, validator), false);
    });
  });
});

describe("Exercise 2 module Tests", () => {
  describe("#validateProperties tests", () => {
    const validators = [
      {
        name: "p1",
        validators: [
          (s) => typeof s == "string" && s.length > 2,
          (s) => s[0] == "a",
        ],
      },
      {
        name: "p2",
        validators: [(s) => Number.isInteger(s)],
      },
    ];
    const obj1 = { p1: "a" };
    const obj2 = { p1: 123 };
    const obj3 = { p1: "abc", p2: 123 };

    it("Should map [ p1 , p2] into [ p1 , p2]", () => {
      assert.deepEqual(validatorModule.validateProperties(obj1, validators), [
        "p1",
        "p2",
      ]);
    });
    it("Should map [ p1 , p2] into [ p1 , p2]", () => {
      assert.deepEqual(validatorModule.validateProperties(obj2, validators), [
        "p1",
        "p2",
      ]);
    });
    it("Should map [ p1 , p2] into []", () => {
      assert.deepEqual(
        validatorModule.validateProperties(obj3, validators),
        []
      );
    });
  });
});

describe("Exercise 3 module Tests", () => {
  describe("prototype #validateProperties tests", () => {
    const validators = [
      {
        name: "p1",
        validators: [
          (s) => typeof s == "string" && s.length > 2,
          (s) => s[0] == "a",
        ],
      },
      {
        name: "p2",
        validators: [(s) => Number.isInteger(s)],
      },
    ];
    const obj1 = { p1: "a" };
    const obj2 = { p1: 123 };
    const obj3 = { p1: "abc", p2: 123 };

    it("Should map [ p1 , p2] into [ p1 , p2]", () => {
      assert.deepEqual(obj1.validateProperties(validators), ["p1", "p2"]);
    });
    it("Should map [ p1 , p2] into [ p1 , p2]", () => {
      assert.deepEqual(obj2.validateProperties(validators), ["p1", "p2"]);
    });
    it("Should map [ p1 , p2] into []", () => {
      assert.deepEqual(obj3.validateProperties(validators), []);
    });
  });
});
