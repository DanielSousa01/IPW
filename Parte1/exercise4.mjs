Array.prototype.associateWith = function (transformation) {
  let unicArray = [];
  this.reverse();
  this.forEach((elem) => {
    if (!unicArray.includes(elem)) unicArray.push(elem);
  });
  unicArray.reverse();
  return unicArray.reduce(
    (prev, curr) => ({ ...prev, [curr]: transformation(curr) }),
    {}
  );
};