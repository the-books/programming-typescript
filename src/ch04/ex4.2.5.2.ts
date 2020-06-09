function call<T extends unknown[], R>(f: (...args: T) => R, ...args: T): R {
  return f(...args);
}

function fill(length: number, value: string): string[] {
  return Array.from({ length }, () => value);
}

const a = call(fill, 10, 'a');

// const b = call(fill,, 20); // Error

// const c = call(fill, 10, 'a', 'z'); // Error


function stack(one: string, two: string, three: string): boolean {
  return true;
}

const e = call(stack, 'aaa', 'bbb', 'ccc');

// const f = call(stack, 'aaa', 'bbb'); // Error

// const g = call(stack, 'aaa', 'bbb', 111); // Error


function pramid(first: number, second: number, third: number): string {
  return `${first} --- ${second} --- ${third}`;
}

const h = call(pramid, 10, 7, 4);

// const i = call(pramid, 10, 7, 4, 2); // Error

export {};
