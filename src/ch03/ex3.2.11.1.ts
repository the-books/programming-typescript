let a: [number] = [1];

let b: [string, string, number] = ['malcolm', 'gladwell', 1963];

b = ['queen', 'elizabeth', 'ii', 1926]; // Error

let trainFares: [number, number?][] = [
  [3.75],
  [8.25, 7.70],
  [10.50],
];

let moreTrainFares: ([number] | [number, number])[] = [
  [1.12],
  [2.45, 3.15],
];

let friends: [string, ...string[]] =['Sara', 'Tali', 'Chole', 'Claire'];

let list: [number, boolean, ...string[]] = [1, false, 'a', 'b', 'c'];

export {};
