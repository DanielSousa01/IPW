export function Spy(target, method) {
  let count = {count: 0};
  let original = target[method];
  target[method] = function (args) {
    count.count++;
    return original.call(this, args);
  };
  return count;
}