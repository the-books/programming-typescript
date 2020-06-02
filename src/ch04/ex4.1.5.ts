function* createFibonacciGenerator() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fibonacciGenerator = createFibonacciGenerator();

console.log(fibonacciGenerator.next()); // { value: 0, done: false }
console.log(fibonacciGenerator.next()); // { value: 1, done: false }
console.log(fibonacciGenerator.next()); // { value: 1, done: false }
console.log(fibonacciGenerator.next()); // { value: 2, done: false }
console.log(fibonacciGenerator.next()); // { value: 3, done: false }
console.log(fibonacciGenerator.next()); // { value: 5, done: false }

export {};
