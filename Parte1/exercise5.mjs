export function checkUsersValid(users) {
  return function (test) {
    return test
      .map((elem) => elem.id)
      .every((elem) => elem in users.map((elem) => elem.id));
  };
}
