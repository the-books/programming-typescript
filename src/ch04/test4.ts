function call<T, U extends unknown[], R>(
  f: (first: T, second: string, ...args: U) => R, first: T, second: string,
  // tslint:disable-next-line: trailing-comma
  ...args: U
): R {
  return f(first, second, ...args);
}

function fill(length: number, value: string): string[] {
  return Array.from({ length }, () => value);
}

const f0 = call(fill, 1, 'hi');
console.log(f0);

// call(fill, 1, 'hi', 2); // Error

function fill2(name: string, nick: string, hobby: string): string[] {
  return Array.from(name, _ => _.toUpperCase());
}

const f1= call(fill2, 'John', 'Jo', 'Running');
console.log(f1);

// call(ddd, 1, 2, 3); // Error

export {};
