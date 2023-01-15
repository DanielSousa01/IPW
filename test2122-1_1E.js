// G3 - 9
function validateProperty(obj, propValidator) {
  if (obj[propValidator.name]) {
    return propValidator.validators.every((elem) =>
      elem(obj[propValidator.name])
    );
  } else {
    return false;
  }
}

// G4 - 10
async function f1(p1, p2) {
    try {
        let responseP1 = await p1
        let responseP2 = await p2
        return responseP1 + responseP2
    } catch (error) {
        console.error(error)
    }
    
}


// console.log(
//   validateProperty(
//     { a: 123, b: "abc" },
//     { name: "b", validators: [(p) => p[0] === "a", (p) => p.length > 2] }
//   ) == true
// );
// console.log(
//   validateProperty(
//     { a: 123, b: "abc" },
//     { name: "b", validators: [(p) => p[0] === "z", (p) => p.length > 2] }
//   ) == false
// );
// console.log(
//   validateProperty(
//     { a: 123, b: "abc" },
//     { name: "c", validators: [(p) => p[0] === "a", (p) => p.length > 2] }
//   ) == false
// );
