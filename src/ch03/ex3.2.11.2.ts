let as: readonly number[] = [1, 2, 3];    // readonly number[]
let bs: readonly number[] = as.concat(4); // readonly number[]
// const cs: number[] = [4, 5, 6];
let three = bs[2]; // number
as[4] = 5; // Error
as.push(6); // Error

type A = readonly string[];
type B = ReadonlyArray<string>;
type C = Readonly<string[]>;

type D = readonly [number, string];
type E = Readonly<[number, string]>;

export {};
