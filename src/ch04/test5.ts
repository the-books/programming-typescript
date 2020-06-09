// function is<T>(first: T, second: T): boolean {
//   return first === second;
// }

function is<T>(...args: T[]): boolean {
  const first = args[0];

  for (const el of args) {
    if (first !== el) {
      return false;
    }
  }
  return true;
}

console.log(is('string', 'otherstring')); // false

console.log(is(true, false)); // false

console.log(is(42, 42)); // true

// is(10, 'foo');

console.log(is([1], [1, 2], [1, 2, 3]));
// console.log([1,2,3] === [1, 2, 3]);
// console.log([1] === [1]);
// console.log([] === []);

// console.log(is('string', 'otherstring', false));

// console.log(is(42, 'otherstring', false));

export {};
